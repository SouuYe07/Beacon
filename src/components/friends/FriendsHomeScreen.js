import { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Background from "../Background";
import useChatsLayout from "../../hooks/useChatsLayout";
import { useFriendsRole } from "./FriendsRoleContext";
import BearSvg from "../../../assets/Navigation/Bear.svg";
import BunnySvg from "../../../assets/Navigation/Bunny.svg";
import ProfileSummaryModal from "./ProfileSummaryModal";
import NotificationsModal from "./NotificationsModal";
import UpdateDetailModal from "./UpdateDetailModal";
import IconButton from "../IconButton.js";
import { getDefaultProfile } from "./profileDefaults";
import { UPDATES, getWeekDays, toDateKey } from "./updatesData";

const ACCENT = "#32759F";
const FILTERS = ["All", "Dietician", "Psychiatrist", "Logs", "Clinic"];

function WhitePanel({ style, children }) {
  return <View style={[styles.panel, style]}>{children}</View>;
}

function UpdateCard({ item, s, showMarkRead, onMarkRead, onPress, isFirst }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: s(12),
        borderTopWidth: isFirst ? 0 : StyleSheet.hairlineWidth,
        borderTopColor: "rgba(0,0,0,0.06)",
        opacity: showMarkRead ? 1 : 0.72,
      }}
    >
      <View
        style={{
          width: s(40),
          height: s(40),
          borderRadius: s(20),
          backgroundColor: "rgba(50, 117, 159, 0.12)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name={item.icon} size={s(20)} color={ACCENT} />
      </View>

      <View style={{ flex: 1, marginLeft: s(12), marginRight: s(8) }}>
        <Text
          className="font-geom-semibold text-[#262626]"
          style={{ fontSize: s(15) }}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text
          className="font-geom-medium"
          style={{ fontSize: s(12), color: ACCENT, marginTop: s(2) }}
        >
          {item.from}
        </Text>
        <Text
          className="font-geom-regular text-[#5A5A5A]"
          style={{ fontSize: s(13), marginTop: s(4) }}
          numberOfLines={2}
        >
          {item.body}
        </Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text
          className="font-geom-regular text-[#5A5A5A]"
          style={{ fontSize: s(11), marginTop: s(2) }}
        >
          {item.time}
        </Text>
        {showMarkRead ? (
          <Pressable
            onPress={(e) => {
              e?.stopPropagation?.();
              onMarkRead?.();
            }}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Mark update as read"
            style={{
              marginTop: s(8),
              width: s(28),
              height: s(28),
              borderRadius: s(14),
              borderWidth: 1.5,
              borderColor: ACCENT,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFFFFF",
            }}
          >
            <MaterialCommunityIcons name="check" size={s(16)} color={ACCENT} />
          </Pressable>
        ) : null}
      </View>
    </Pressable>
  );
}

export default function FriendsHomeScreen() {
  const role = useFriendsRole();
  const navigation = useNavigation();
  const { insets, s, styles: L } = useChatsLayout();
  const ProfileIcon = role === "friend" ? BunnySvg : BearSvg;
  const weekDays = useMemo(() => getWeekDays(new Date()), []);
  const todayKey = useMemo(() => toDateKey(new Date()), []);

  const [profile, setProfile] = useState(() => getDefaultProfile(role));
  const [selectedDateKey, setSelectedDateKey] = useState(todayKey);
  const [filter, setFilter] = useState("All");
  const [readIds, setReadIds] = useState(() => new Set());
  const [earlierOpen, setEarlierOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeUpdate, setActiveUpdate] = useState(null);

  useEffect(() => {
    setProfile(getDefaultProfile(role));
  }, [role]);

  const selectedDay = weekDays.find((day) => day.dateKey === selectedDateKey) ??
    weekDays.find((day) => day.isToday) ??
    weekDays[0];

  const openFullCalendar = () => {
    navigation.getParent()?.navigate("Calendar");
  };

  const openUpdateDetail = (item) => {
    setActiveUpdate(item);
  };

  const selectedDateLabel = selectedDay
    ? selectedDay.date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
    : undefined;

  const monthLabel = weekDays[0]?.date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const dayUpdates = UPDATES.filter(
    (item) => item.dayOffset === selectedDay?.dayOffset
  );

  const matchesFilter = (item) => filter === "All" || item.filter === filter;

  const unreadItems = dayUpdates.filter(
    (item) => !readIds.has(item.id) && matchesFilter(item)
  );
  const earlierItems = dayUpdates.filter(
    (item) => readIds.has(item.id) && matchesFilter(item)
  );

  const markRead = (id) => {
    setReadIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const selectedDayTitle = selectedDay
    ? selectedDay.date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    })
    : "Updates";

  return (
    <View className="flex-1 relative">
      <Background />

      <View
        className="z-10 flex-1"
        style={{
          paddingTop: insets.top + L.topPad + s(16),
          paddingBottom: L.tabClearance,
          paddingHorizontal: L.sidePad,
        }}
      >
        <View
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: L.sectionGap + s(4),
            minHeight: s(56),
          }}
        >
          <Text
            className="font-geom-bold text-[#262626]"
            style={{
              flex: 1,
              fontSize: L.titleSize,
              lineHeight: L.titleSize * 1.15,
              paddingRight: s(10),
            }}
            numberOfLines={1}
          >
            {`Hi, ${profile.displayName}`}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: s(10) }}>
              <IconButton
                name="bell-outline"
                size={s(30)}
                buttonSize={s(52)}
                accessibilityLabel="Notifications"
                onPress={() => setNotificationsOpen(true)}
              />
            </View>
            <IconButton
              Icon={ProfileIcon}
              size={s(32)}
              buttonSize={s(52)}
              accessibilityLabel="Account"
              iconColor="#262626"
              onPress={() => setProfileOpen(true)}
            />
          </View>
        </View>

        <ProfileSummaryModal
          visible={profileOpen}
          onClose={() => setProfileOpen(false)}
          profile={profile}
          onSaveProfile={setProfile}
          s={s}
        />

        <NotificationsModal
          visible={notificationsOpen}
          onClose={() => setNotificationsOpen(false)}
          s={s}
        />

        <UpdateDetailModal
          visible={!!activeUpdate}
          onClose={() => setActiveUpdate(null)}
          update={activeUpdate}
          dateLabel={selectedDateLabel}
          s={s}
        />

        <WhitePanel
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            borderRadius: L.activeRadius,
            paddingHorizontal: L.messagesPad,
            paddingTop: s(14),
            paddingBottom: s(16),
            marginBottom: L.sectionGap,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: s(12),
            }}
          >
            <Text
              className="font-geom-semibold text-[#262626]"
              style={{ fontSize: 24, lineHeight: 28 }}
            >
              This Week
            </Text>
            <Pressable
              onPress={openFullCalendar}
              style={{ flexDirection: "row", alignItems: "center" }}
              hitSlop={8}
            >
              <Text
                className="font-geom-medium text-[#5A5A5A]"
                style={{ fontSize: L.seeAllSize, marginRight: s(4) }}
              >
                {monthLabel}
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={s(18)}
                color="#5A5A5A"
              />
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {weekDays.map((day) => {
              const selected = day.dateKey === selectedDay?.dateKey;
              const daySize = 36;
              return (
                <Pressable
                  key={day.dateKey}
                  onPress={() => setSelectedDateKey(day.dateKey)}
                  android_ripple={{ color: "transparent", borderless: true }}
                  style={{ alignItems: "center", width: 44 }}
                  accessibilityRole="button"
                  accessibilityState={{ selected }}
                  accessibilityLabel={`${day.label} ${day.dayNumber}`}
                >
                  <Text
                    className="font-geom-medium"
                    style={{
                      fontSize: 12,
                      color: selected ? ACCENT : "#5A5A5A",
                      marginBottom: 6,
                    }}
                  >
                    {day.label}
                  </Text>
                  <View
                    style={{
                      width: daySize,
                      height: daySize,
                      borderRadius: 999,
                      overflow: "hidden",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: selected ? ACCENT : "transparent",
                    }}
                  >
                    <Text
                      className="font-geom-semibold"
                      style={{
                        fontSize: s(15),
                        color: selected ? "#FFFFFF" : "#262626",
                      }}
                    >
                      {day.dayNumber}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: s(6),
                      height: s(6),
                      borderRadius: s(3),
                      marginTop: s(6),
                      backgroundColor: day.hasMarker ? ACCENT : "transparent",
                    }}
                  />
                </Pressable>
              );
            })}
          </View>
        </WhitePanel>

        <WhitePanel
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            flex: 1,
            minHeight: s(200),
            borderRadius: L.messagesRadius,
            padding: L.messagesPad,
          }}
        >
          <Text
            className="font-geom-semibold text-[#262626]"
            style={{ fontSize: 24, lineHeight: 28, marginBottom: s(4) }}
          >
            Updates
          </Text>
          <Text
            className="font-geom-medium text-[#5A5A5A]"
            style={{ fontSize: s(13), marginBottom: s(10) }}
          >
            {selectedDayTitle}
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 0, marginBottom: s(8) }}
            contentContainerStyle={{
              alignItems: "center",
              paddingRight: s(4),
            }}
          >
            {FILTERS.map((chip) => {
              const selected = filter === chip;
              return (
                <Pressable
                  key={chip}
                  onPress={() => setFilter(chip)}
                  style={{
                    height: s(32),
                    paddingHorizontal: s(14),
                    borderRadius: s(16),
                    marginRight: s(8),
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: selected ? ACCENT : "#F3F7F9",
                  }}
                >
                  <Text
                    className="font-geom-medium"
                    style={{
                      fontSize: s(13),
                      color: selected ? "#FFFFFF" : "#5A5A5A",
                    }}
                  >
                    {chip}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: s(4) }}
          >
            {unreadItems.length === 0 ? (
              <Text
                className="font-geom-regular text-[#5A5A5A]"
                style={{ fontSize: s(14), paddingVertical: s(16) }}
              >
                No updates for this day.
              </Text>
            ) : (
              unreadItems.map((item, index) => (
                <UpdateCard
                  key={item.id}
                  item={item}
                  s={s}
                  isFirst={index === 0}
                  showMarkRead
                  onMarkRead={() => markRead(item.id)}
                  onPress={() => openUpdateDetail(item)}
                />
              ))
            )}

            {earlierItems.length > 0 ? (
              <View style={{ marginTop: s(8) }}>
                <Pressable
                  onPress={() => setEarlierOpen((open) => !open)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: s(10),
                    borderTopWidth: StyleSheet.hairlineWidth,
                    borderTopColor: "rgba(0,0,0,0.08)",
                  }}
                >
                  <Text
                    className="font-geom-semibold text-[#262626]"
                    style={{ fontSize: s(16) }}
                  >
                    {`Earlier (${earlierItems.length})`}
                  </Text>
                  <MaterialCommunityIcons
                    name={earlierOpen ? "chevron-up" : "chevron-down"}
                    size={s(20)}
                    color="#5A5A5A"
                  />
                </Pressable>

                {earlierOpen
                  ? earlierItems.map((item, index) => (
                    <UpdateCard
                      key={item.id}
                      item={item}
                      s={s}
                      isFirst={index === 0}
                      showMarkRead={false}
                      onPress={() => openUpdateDetail(item)}
                    />
                  ))
                  : null}
              </View>
            ) : null}
          </ScrollView>
        </WhitePanel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
});
