import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../Background";
import useChatsLayout from "../../hooks/useChatsLayout";
import UserAvatar from "../../../assets/Icons/user-avatar.svg";
import NextActiveIcon from "../../../assets/Icons/chevron-next.svg";
import Search from "../Search.js";

const ACCENT = "#32759F";

const ACTIVE_USERS = [
  { id: "a1", name: "User" },
  { id: "a2", name: "User" },
  { id: "a3", name: "User" },
  { id: "a4", name: "User" },
  { id: "a5", name: "User" },
  { id: "a6", name: "User" },
  { id: "a7", name: "User" },
  { id: "a8", name: "User" },
  { id: "a9", name: "User" },
  { id: "a10", name: "User" },
];

const MESSAGES = [
  {
    id: "m1",
    name: "User User",
    preview: "You: Lorem ipsum...",
    time: "Just Now",
    unread: 3,
  },
  {
    id: "m2",
    name: "User User",
    preview: "Typing...",
    time: "20 m",
    typing: true,
  },
  {
    id: "m3",
    name: "User User",
    preview: "Lorem ipsum...",
    time: "1 hr",
    unread: 1,
  },
  {
    id: "m4",
    name: "User User",
    preview: "You: Lorem ipsum...",
    time: "May 18",
  },
  {
    id: "m5",
    name: "User User",
    preview: "You: Lorem ipsum...",
    time: "May 18",
  },
  {
    id: "m6",
    name: "User User",
    preview: "Lorem ipsum dolor sit...",
    time: "May 17",
    unread: 2,
  },
  {
    id: "m7",
    name: "User User",
    preview: "You: Okay, see you then!",
    time: "May 16",
  },
  {
    id: "m8",
    name: "User User",
    preview: "Typing...",
    time: "May 15",
    typing: true,
  },
  {
    id: "m9",
    name: "User User",
    preview: "Can we reschedule?",
    time: "May 14",
    unread: 1,
  },
  {
    id: "m10",
    name: "User User",
    preview: "You: Lorem ipsum...",
    time: "May 12",
  },
  {
    id: "m11",
    name: "User User",
    preview: "Thanks for the update!",
    time: "May 10",
  },
  {
    id: "m12",
    name: "User User",
    preview: "You: Sounds good.",
    time: "May 8",
  },
];

function WhitePanel({ style, children }) {
  return <View style={[styles.panel, style]}>{children}</View>;
}

export default function ChatsScreen() {
  const navigation = useNavigation();
  const { insets, s, styles: L } = useChatsLayout();

  const openThread = (item) => {
    navigation.navigate("ChatThread", {
      name: item.name,
      online: true,
    });
  };

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
        <Text
          className="font-geom-bold text-[#262626]"
          style={{
            fontSize: L.titleSize,
            lineHeight: L.titleSize * 1.15,
            marginBottom: L.titleGap,
          }}
        >
          Chats
        </Text>

        <Search />

        <WhitePanel
          style={{
            width: L.contentWidth,
            alignSelf: "center",
            height: L.activeHeight,
            borderRadius: L.activeRadius,
            marginBottom: L.sectionGap,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: s(16),
              paddingTop: s(12),
              marginBottom: L.activeHeaderToUsersGap,
            }}
          >
            <Text
              className="font-geom-semibold text-[#262626]"
              style={{ fontSize: L.sectionTitleSize, lineHeight: L.sectionTitleSize * 1.15 }}
            >
              Active
            </Text>
            <Pressable hitSlop={8}>
              <Text
                className="font-geom-medium"
                style={{ fontSize: L.seeAllSize, color: ACCENT }}
              >
                See All
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: s(12),
              paddingBottom: s(10),
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              style={{ flex: 1 }}
              contentContainerStyle={{
                alignItems: "center",
                gap: s(12),
                paddingRight: s(8),
              }}
            >
              {ACTIVE_USERS.map((user) => (
                <Pressable key={user.id} style={{ alignItems: "center", width: L.avatarSize + s(4) }}>
                  <UserAvatar width={L.avatarSize} height={L.avatarSize} />
                  <Text
                    className="font-geom-medium text-[#262626]"
                    style={{
                      fontSize: s(12),
                      marginTop: s(4),
                    }}
                    numberOfLines={1}
                  >
                    {user.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>

            <Pressable
              hitSlop={6}
              style={{
                marginLeft: s(4),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NextActiveIcon width={L.nextIconSize} height={L.nextIconSize} />
            </Pressable>
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
            style={{
              fontSize: L.sectionTitleSize,
              lineHeight: L.sectionTitleSize * 1.15,
              marginBottom: s(8),
            }}
          >
            Messages
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingBottom: s(4) }}
          >
            {MESSAGES.map((item, index) => (
              <Pressable
                key={item.id}
                onPress={() => openThread(item)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: s(10),
                  borderTopWidth: index === 0 ? 0 : StyleSheet.hairlineWidth,
                  borderTopColor: "rgba(0,0,0,0.06)",
                }}
              >
                <UserAvatar width={L.avatarSize} height={L.avatarSize} />

                <View
                  style={{
                    flex: 1,
                    marginLeft: s(12),
                    marginRight: s(8),
                  }}
                >
                  <Text
                    className="font-geom-semibold text-[#262626]"
                    style={{ fontSize: s(15) }}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <Text
                    className="font-geom-regular"
                    style={{
                      fontSize: s(13),
                      marginTop: s(2),
                      color: item.typing ? ACCENT : "#5A5A5A",
                    }}
                    numberOfLines={1}
                  >
                    {item.preview}
                  </Text>
                </View>

                <View style={{ alignItems: "flex-end", minWidth: s(52) }}>
                  <Text
                    className="font-geom-regular text-[#5A5A5A]"
                    style={{ fontSize: s(12) }}
                  >
                    {item.time}
                  </Text>
                  {item.unread ? (
                    <View
                      style={{
                        marginTop: s(6),
                        minWidth: s(20),
                        height: s(20),
                        borderRadius: s(10),
                        backgroundColor: ACCENT,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: s(5),
                      }}
                    >
                      <Text
                        className="font-geom-semibold text-white"
                        style={{ fontSize: s(11), lineHeight: s(13) }}
                      >
                        {item.unread}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </Pressable>
            ))}
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
