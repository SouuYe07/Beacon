import { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Background from "../Background";
import useChatsLayout from "../../hooks/useChatsLayout";
import IconButton from "../IconButton";
import ProfileSummaryModal from "../homepage/ProfileSummaryModal";
import NotificationsModal from "../homepage/NotificationsModal";
import UpdateDetailModal from "../homepage/UpdateDetailModal";
import { getDefaultProfile } from "../homepage/profileDefaults";
import { getWeekDays } from "../homepage/updatesData";
import PenguinSvg from "../../../assets/Icons/tab-penguin.svg";
import {
  TODAY_CARDS,
  CARE_UPDATES,
  WEEK_MARKERS,
} from "./patientHomeData";

const ACCENT = "#32759F";
const PANEL_BG = "#FFFFFF";

function BentoTile({ style, children, onPress, clip = false }) {
  const Comp = onPress ? Pressable : View;
  return (
    <Comp
      onPress={onPress}
      style={[
        {
          backgroundColor: PANEL_BG,
          borderRadius: 22,
          // Avoid overflow:hidden on pressable tiles — it clips text and
          // can turn nested day circles into squares on Android.
          ...(clip ? { overflow: "hidden" } : null),
        },
        style,
      ]}
    >
      {children}
    </Comp>
  );
}

export default function PatientHomeScreen() {
  const navigation = useNavigation();
  const { insets, s, styles: L } = useChatsLayout();
  const weekDays = useMemo(() => getWeekDays(new Date()), []);
  const todayKey = useMemo(
    () => weekDays.find((d) => d.isToday)?.dateKey ?? weekDays[0]?.dateKey,
    [weekDays]
  );

  const [profile, setProfile] = useState(() => getDefaultProfile("patient"));
  const [selectedDateKey, setSelectedDateKey] = useState(todayKey);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [activeUpdate, setActiveUpdate] = useState(null);

  const selectedDay =
    weekDays.find((day) => day.dateKey === selectedDateKey) ??
    weekDays.find((day) => day.isToday) ??
    weekDays[0];

  const monthLabel = weekDays[0]?.date.toLocaleString("en-US", {
    month: "short",
  });

  const goTab = (tabName) => navigation.navigate(tabName);
  const gap = s(10);

  return (
    <View className="flex-1 relative">
      <Background />

      <View
        className="z-10 flex-1"
        style={{
          paddingTop: insets.top + L.topPad,
          paddingBottom: L.tabClearance,
          paddingHorizontal: L.sidePad,
        }}
      >
        <View
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            flex: 1,
          }}
        >
          {/* Header — fixed */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: gap,
              minHeight: s(48),
            }}
          >
            <Text
              className="font-geom-bold text-[#262626]"
              style={{
                flex: 1,
                fontSize: L.titleSize,
                lineHeight: L.titleSize * 1.15,
                paddingRight: s(8),
              }}
              numberOfLines={1}
            >
              {`Hi, ${profile.displayName}`}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginRight: s(8) }}>
                <IconButton
                  name="bell-outline"
                  size={s(28)}
                  buttonSize={s(48)}
                  accessibilityLabel="Notifications"
                  onPress={() => setNotificationsOpen(true)}
                />
              </View>
              <IconButton
                Icon={PenguinSvg}
                size={s(30)}
                buttonSize={s(48)}
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
            dateLabel="Today"
            s={s}
          />

          {/* Fixed bento — page itself does not scroll */}
          <View style={{ flex: 1, minHeight: 0 }}>
            {/* This Week */}
            <BentoTile
              style={{
                flexShrink: 0,
                paddingHorizontal: s(18),
                paddingTop: s(16),
                paddingBottom: s(14),
                marginBottom: gap,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: s(10),
                }}
              >
                <Text
                  className="font-geom-semibold text-[#262626]"
                  style={{ fontSize: s(22), lineHeight: s(26) }}
                >
                  This Week
                </Text>
                <Pressable
                  onPress={() => goTab("Calendar")}
                  hitSlop={8}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text
                    className="font-geom-medium text-[#5A5A5A]"
                    style={{ fontSize: s(14), marginRight: s(2) }}
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
                  const markers = WEEK_MARKERS[day.dayOffset] ?? {};
                  const daySize = s(34);
                  const dayRadius = daySize / 2;
                  return (
                    <Pressable
                      key={day.dateKey}
                      onPress={() => setSelectedDateKey(day.dateKey)}
                      android_ripple={{ color: "transparent", borderless: true }}
                      style={{ alignItems: "center", width: s(42) }}
                      accessibilityRole="button"
                      accessibilityState={{ selected }}
                    >
                      <Text
                        className="font-geom-medium"
                        style={{
                          fontSize: s(13),
                          color: selected ? ACCENT : "#5A5A5A",
                          marginBottom: s(5),
                        }}
                      >
                        {day.label}
                      </Text>
                      <View
                        style={{
                          width: daySize,
                          height: daySize,
                          borderRadius: dayRadius,
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
                            includeFontPadding: false,
                            textAlign: "center",
                          }}
                        >
                          {day.dayNumber}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: s(4),
                          height: s(5),
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            width: s(5),
                            height: s(5),
                            borderRadius: s(2.5),
                            marginRight: s(2),
                            backgroundColor: markers.session
                              ? ACCENT
                              : "transparent",
                          }}
                        />
                        <View
                          style={{
                            width: s(5),
                            height: s(5),
                            borderRadius: s(2.5),
                            backgroundColor: markers.meal
                              ? "rgba(50, 117, 159, 0.45)"
                              : "transparent",
                          }}
                        />
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </BentoTile>

            {/* Today — 2 tiles (session wide, meal narrow) */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: gap,
                minHeight: s(158),
                flexShrink: 0,
              }}
            >
              {TODAY_CARDS.map((card, index) => {
                const isPrimary = index === 0;
                return (
                  <BentoTile
                    key={card.id}
                    onPress={() => goTab(card.tab)}
                    style={{
                      flex: isPrimary ? 1.35 : 1,
                      marginLeft: index === 0 ? 0 : gap,
                      paddingHorizontal: s(16),
                      paddingTop: s(16),
                      paddingBottom: s(16),
                      justifyContent: "flex-start",
                    }}
                  >
                    <View
                      style={{
                        width: s(40),
                        height: s(40),
                        borderRadius: s(20),
                        backgroundColor: "rgba(50, 117, 159, 0.14)",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: s(12),
                      }}
                    >
                      <MaterialCommunityIcons
                        name={card.icon}
                        size={s(22)}
                        color={ACCENT}
                      />
                    </View>
                    <Text
                      className="font-geom-semibold text-[#262626]"
                      style={{
                        fontSize: s(17),
                        lineHeight: s(21),
                        marginBottom: s(4),
                      }}
                      numberOfLines={2}
                    >
                      {card.title}
                    </Text>
                    <Text
                      className="font-geom-regular text-[#5A5A5A]"
                      style={{
                        fontSize: s(13),
                        lineHeight: s(18),
                        includeFontPadding: false,
                      }}
                      numberOfLines={3}
                    >
                      {card.subtitle}
                    </Text>
                  </BentoTile>
                );
              })}
            </View>

            {/* Care updates — only this area scrolls */}
            <BentoTile
              clip
              style={{
                flex: 1,
                minHeight: 0,
                paddingHorizontal: s(18),
                paddingTop: s(16),
                paddingBottom: s(12),
              }}
            >
              <View style={{ flexShrink: 0, marginBottom: s(8) }}>
                <Text
                  className="font-geom-semibold text-[#262626]"
                  style={{ fontSize: s(22), lineHeight: s(26) }}
                >
                  Care updates
                </Text>
                <Text
                  className="font-geom-medium text-[#5A5A5A]"
                  style={{ fontSize: s(14), marginTop: s(3) }}
                >
                  From your circle
                </Text>
              </View>

              <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: s(6) }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled
                bounces
              >
                {CARE_UPDATES.map((item, index) => (
                  <Pressable
                    key={item.id}
                    onPress={() => setActiveUpdate(item)}
                    accessibilityRole="button"
                    accessibilityLabel={`Open update: ${item.title}`}
                    android_ripple={{ color: "rgba(50, 117, 159, 0.08)" }}
                    style={{
                      flexDirection: "row",
                      alignItems: "flex-start",
                      paddingVertical: s(13),
                      borderTopWidth: index === 0 ? 0 : StyleSheet.hairlineWidth,
                      borderTopColor: "rgba(0,0,0,0.06)",
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
                      <MaterialCommunityIcons
                        name={item.icon}
                        size={s(20)}
                        color={ACCENT}
                      />
                    </View>
                    <View
                      style={{ flex: 1, marginLeft: s(12), marginRight: s(6) }}
                    >
                      <Text
                        className="font-geom-semibold text-[#262626]"
                        style={{ fontSize: s(16) }}
                        numberOfLines={1}
                      >
                        {item.title}
                      </Text>
                      <Text
                        className="font-geom-medium"
                        style={{
                          fontSize: s(13),
                          color: ACCENT,
                          marginTop: s(2),
                        }}
                        numberOfLines={1}
                      >
                        {item.from}
                      </Text>
                      <Text
                        className="font-geom-regular text-[#5A5A5A]"
                        style={{ fontSize: s(14), marginTop: s(3) }}
                        numberOfLines={2}
                      >
                        {item.body}
                      </Text>
                    </View>
                    <Text
                      className="font-geom-regular text-[#5A5A5A]"
                      style={{ fontSize: s(12), marginTop: s(2) }}
                    >
                      {item.time}
                    </Text>
                  </Pressable>
                ))}
              </ScrollView>
            </BentoTile>
          </View>
        </View>
      </View>
    </View>
  );
}
