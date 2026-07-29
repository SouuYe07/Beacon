import { View, Text, ScrollView, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Background from "../../components/Background";
import useChatsLayout from "../../hooks/useChatsLayout";
import { getUpdateById } from "../../components/friends/updatesData";

const ACCENT = "#32759F";

export default function UpdateDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const { insets, s, styles: L } = useChatsLayout();
  const update = getUpdateById(route.params?.updateId);
  const dateLabel = route.params?.dateLabel;

  if (!update) {
    return (
      <View className="flex-1 relative">
        <Background />
        <View
          className="z-10 flex-1"
          style={{
            paddingTop: insets.top + L.topPad,
            paddingHorizontal: L.sidePad,
          }}
        >
          <Pressable onPress={() => navigation.goBack()} hitSlop={12}>
            <MaterialCommunityIcons name="chevron-left" size={s(28)} color="#262626" />
          </Pressable>
          <Text
            className="font-geom-semibold text-[#262626]"
            style={{ fontSize: s(18), marginTop: s(20) }}
          >
            Update not found.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 relative">
      <Background />

      <ScrollView
        className="z-10"
        contentContainerStyle={{
          paddingTop: insets.top + L.topPad,
          paddingBottom: L.tabClearance,
          paddingHorizontal: L.sidePad,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: L.titleGap,
          }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            style={{
              width: s(40),
              height: s(40),
              borderRadius: s(20),
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              justifyContent: "center",
              marginRight: s(12),
            }}
          >
            <MaterialCommunityIcons name="chevron-left" size={s(28)} color="#262626" />
          </Pressable>
          <Text
            className="font-geom-bold text-[#262626]"
            style={{
              flex: 1,
              fontSize: L.titleSize,
              lineHeight: L.titleSize * 1.15,
            }}
            numberOfLines={1}
          >
            Update
          </Text>
        </View>

        <View
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: L.messagesRadius,
            padding: L.messagesPad,
          }}
        >
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
                style={{ fontSize: s(22), lineHeight: s(26) }}
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

          <View
            style={{
              flexDirection: "row",
              marginTop: s(14),
              marginBottom: s(16),
            }}
          >
            {dateLabel ? (
              <View
                style={{
                  paddingHorizontal: s(12),
                  paddingVertical: s(6),
                  borderRadius: s(999),
                  backgroundColor: "#F3F7F9",
                  marginRight: s(8),
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
            style={{ fontSize: 24, lineHeight: 28, marginBottom: s(8) }}
          >
            Overview
          </Text>
          <Text
            className="font-geom-regular text-[#262626]"
            style={{ fontSize: s(15), lineHeight: s(22), marginBottom: s(18) }}
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
              marginTop: s(10),
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
        </View>
      </ScrollView>
    </View>
  );
}
