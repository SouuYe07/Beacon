import { Modal, View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ACCENT = "#32759F";

export default function UpdateDetailModal({ visible, onClose, update, dateLabel, s }) {
  if (!update) return null;

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
              paddingBottom: s(18),
              marginHorizontal: s(24),
              maxHeight: "82%",
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: s(14),
            }}
          >
            <Text
              className="font-geom-bold text-[#262626]"
              style={{ fontSize: s(24), lineHeight: s(28) }}
            >
              Update
            </Text>
            <Pressable
              onPress={onClose}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Close update"
            >
              <MaterialCommunityIcons name="close" size={s(24)} color="#5A5A5A" />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  width: s(52),
                  height: s(52),
                  borderRadius: s(26),
                  backgroundColor: "rgba(50, 117, 159, 0.12)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name={update.icon}
                  size={s(26)}
                  color={ACCENT}
                />
              </View>
              <View style={{ flex: 1, marginLeft: s(12) }}>
                <Text
                  className="font-geom-bold text-[#262626]"
                  style={{ fontSize: s(20), lineHeight: s(24) }}
                >
                  {update.title}
                </Text>
                <Text
                  className="font-geom-medium"
                  style={{ fontSize: s(14), color: ACCENT, marginTop: s(4) }}
                >
                  {update.from}
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: s(12) }}>
              {dateLabel ? (
                <View
                  style={{
                    paddingHorizontal: s(12),
                    paddingVertical: s(6),
                    borderRadius: s(999),
                    backgroundColor: "#F3F7F9",
                    marginRight: s(8),
                    marginBottom: s(8),
                  }}
                >
                  <Text
                    className="font-geom-medium text-[#5A5A5A]"
                    style={{ fontSize: s(12) }}
                  >
                    {dateLabel}
                  </Text>
                </View>
              ) : null}
              <View
                style={{
                  paddingHorizontal: s(12),
                  paddingVertical: s(6),
                  borderRadius: s(999),
                  backgroundColor: "#F3F7F9",
                  marginBottom: s(8),
                }}
              >
                <Text
                  className="font-geom-medium text-[#5A5A5A]"
                  style={{ fontSize: s(12) }}
                >
                  {update.time}
                </Text>
              </View>
            </View>

            <Text
              className="font-geom-semibold text-[#262626]"
              style={{ fontSize: 24, lineHeight: 28, marginTop: s(8), marginBottom: s(8) }}
            >
              Overview
            </Text>
            <Text
              className="font-geom-regular text-[#262626]"
              style={{ fontSize: s(15), lineHeight: s(22), marginBottom: s(16) }}
            >
              {update.details.summary}
            </Text>

            <Text
              className="font-geom-semibold text-[#262626]"
              style={{ fontSize: 24, lineHeight: 28, marginBottom: s(8) }}
            >
              Details
            </Text>
            {update.details.notes.map((note, index) => (
              <View
                key={`${update.id}-note-${index}`}
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  marginBottom: s(10),
                }}
              >
                <View
                  style={{
                    width: s(6),
                    height: s(6),
                    borderRadius: s(3),
                    backgroundColor: ACCENT,
                    marginTop: s(8),
                    marginRight: s(10),
                  }}
                />
                <Text
                  className="font-geom-regular text-[#262626]"
                  style={{ flex: 1, fontSize: s(15), lineHeight: s(22) }}
                >
                  {note}
                </Text>
              </View>
            ))}

            <View
              style={{
                marginTop: s(8),
                padding: s(14),
                borderRadius: s(18),
                backgroundColor: "rgba(50, 117, 159, 0.10)",
              }}
            >
              <Text
                className="font-geom-semibold"
                style={{ fontSize: s(14), color: ACCENT, marginBottom: s(6) }}
              >
                Suggested next step
              </Text>
              <Text
                className="font-geom-regular text-[#262626]"
                style={{ fontSize: s(14), lineHeight: s(20) }}
              >
                {update.details.action}
              </Text>
            </View>
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
