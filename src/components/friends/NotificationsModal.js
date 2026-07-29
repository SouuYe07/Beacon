import { useMemo, useState } from "react";
import { Modal, View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ACCENT = "#32759F";

const SEED_NOTIFICATIONS = [
  {
    id: "n1",
    title: "New meal plan shared",
    body: "Your dietician updated this week’s lunch options.",
    time: "12 m",
    icon: "food-apple-outline",
    unread: true,
  },
  {
    id: "n2",
    title: "Session tomorrow",
    body: "Psychiatrist talk session at 3:00 PM.",
    time: "1 h",
    icon: "calendar-clock-outline",
    unread: true,
  },
  {
    id: "n3",
    title: "Breakfast logged",
    body: "Penguin added oatmeal and fruit to today’s log.",
    time: "Yesterday",
    icon: "check-circle-outline",
    unread: true,
  },
  {
    id: "n4",
    title: "Care note available",
    body: "Clinic shared a short progress note with your circle.",
    time: "Mon",
    icon: "note-text-outline",
    unread: false,
  },
  {
    id: "n5",
    title: "Weight check-in",
    body: "A new weight entry is ready for review.",
    time: "Sun",
    icon: "scale-bathroom",
    unread: false,
  },
];

export default function NotificationsModal({ visible, onClose, s }) {
  const [items, setItems] = useState(SEED_NOTIFICATIONS);

  const unreadCount = useMemo(
    () => items.filter((item) => item.unread).length,
    [items]
  );

  const markRead = (id) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, unread: false } : item))
    );
  };

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable
          onPress={() => {}}
          style={[
            styles.sheet,
            {
              borderRadius: s(30),
              paddingHorizontal: s(20),
              paddingTop: s(18),
              paddingBottom: s(16),
              marginHorizontal: s(24),
              maxHeight: "80%",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: s(6),
            }}
          >
            <Text
              className="font-geom-bold text-[#262626]"
              style={{ fontSize: s(24), lineHeight: s(28) }}
            >
              Notifications
            </Text>
            <Pressable
              onPress={onClose}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Close notifications"
            >
              <MaterialCommunityIcons name="close" size={s(24)} color="#5A5A5A" />
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: s(12),
            }}
          >
            <Text
              className="font-geom-medium text-[#5A5A5A]"
              style={{ fontSize: s(13) }}
            >
              {unreadCount > 0 ? `${unreadCount} unread` : "All caught up"}
            </Text>
            {unreadCount > 0 ? (
              <Pressable onPress={markAllRead} hitSlop={8}>
                <Text
                  className="font-geom-semibold"
                  style={{ fontSize: s(13), color: ACCENT }}
                >
                  Mark all read
                </Text>
              </Pressable>
            ) : null}
          </View>

          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            {items.map((item, index) => (
              <Pressable
                key={item.id}
                onPress={() => markRead(item.id)}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  paddingVertical: s(12),
                  borderTopWidth: index === 0 ? 0 : StyleSheet.hairlineWidth,
                  borderTopColor: "rgba(0,0,0,0.08)",
                  opacity: item.unread ? 1 : 0.7,
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

                <View style={{ flex: 1, marginLeft: s(12), marginRight: s(8) }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      className="font-geom-semibold text-[#262626]"
                      style={{ fontSize: s(15), flex: 1 }}
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                    {item.unread ? (
                      <View
                        style={{
                          width: s(8),
                          height: s(8),
                          borderRadius: s(4),
                          backgroundColor: ACCENT,
                          marginLeft: s(6),
                        }}
                      />
                    ) : null}
                  </View>
                  <Text
                    className="font-geom-regular text-[#5A5A5A]"
                    style={{ fontSize: s(13), marginTop: s(4) }}
                    numberOfLines={2}
                  >
                    {item.body}
                  </Text>
                </View>

                <Text
                  className="font-geom-regular text-[#5A5A5A]"
                  style={{ fontSize: s(11), marginTop: s(2) }}
                >
                  {item.time}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
  },
});
