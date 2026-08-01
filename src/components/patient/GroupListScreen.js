import { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../Background";
import Search from "../Search";
import GroupMemberCard from "./GroupMemberCard";
import { GROUP_FILTERS, GROUP_MEMBERS } from "./groupData";
import useChatsLayout from "../../hooks/useChatsLayout";
import useSelectLayout from "../../hooks/useSelectLayout";

const ACCENT = "#32759F";

function matchesFilter(member, filter) {
  if (filter === "All") return true;
  if (filter === "Friend") return member.role === "friend";
  if (filter === "Family") return member.role === "family";
  if (filter === "Health Professional") return member.role === "professional";
  return true;
}

export default function GroupListScreen() {
  const navigation = useNavigation();
  const { styles } = useSelectLayout();
  const { insets, s, styles: L } = useChatsLayout();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const members = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GROUP_MEMBERS.filter((m) => {
      if (!matchesFilter(m, filter)) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.phone.toLowerCase().includes(q) ||
        m.roleLabel.toLowerCase().includes(q) ||
        (m.relationship && m.relationship.toLowerCase().includes(q))
      );
    });
  }, [query, filter]);

  return (
    <View className="flex-1 relative">
      <Background />

      <View
        className="z-10 flex-1"
        style={{
          // Match Home / Chats header spacing
          paddingTop: insets.top + L.topPad,
          paddingBottom: L.tabClearance,
          paddingHorizontal: styles.sidePad,
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
          Group
        </Text>

        <Search value={query} onChangeText={setQuery} placeholder="Search" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, marginBottom: s(10) }}
          contentContainerStyle={{
            alignItems: "center",
            paddingRight: s(4),
          }}
        >
          {GROUP_FILTERS.map((chip) => {
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

        <View
          style={{
            flex: 1,
            width: L.contentWidth,
            alignSelf: "center",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: s(30),
            overflow: "hidden",
            minHeight: s(420),
            marginTop: s(8),
          }}
        >
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              alignItems: "center",
              paddingVertical: s(16),
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
          >
            {members.length === 0 ? (
              <Text
                className="font-geom-regular"
                style={{
                  fontSize: s(16),
                  color: "#5A5A5A",
                  marginTop: s(40),
                  textAlign: "center",
                }}
              >
                No people match your search.
              </Text>
            ) : (
              members.map((member) => (
                <Pressable
                  key={member.id}
                  onPress={() =>
                    navigation.navigate("GroupDetail", { member })
                  }
                  accessibilityRole="button"
                  accessibilityLabel={`Open details for ${member.name}`}
                >
                  <GroupMemberCard
                    name={member.name}
                    phone={member.phone}
                    role={member.role}
                    roleLabel={member.roleLabel}
                    s={s}
                  />
                </Pressable>
              ))
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
