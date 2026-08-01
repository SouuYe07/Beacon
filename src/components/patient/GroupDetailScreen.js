import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Background from "../Background";
import useChatsLayout from "../../hooks/useChatsLayout";
import useSelectLayout from "../../hooks/useSelectLayout";
import {
  getGroupMemberById,
  canProposeRemoval,
} from "./groupData";
import FriendsSvg from "../../../assets/Animals/Friends.svg";
import FamilySvg from "../../../assets/Animals/Family.svg";
import ProfessionalSvg from "../../../assets/Animals/Professional.svg";
import BackIcon from "../../../assets/Icons/chevron-back.svg";

const ACCENT = "#32759F";

const AVATARS = {
  friend: FriendsSvg,
  family: FamilySvg,
  professional: ProfessionalSvg,
};

function DetailRow({ label, value, s }) {
  return (
    <View style={{ marginBottom: s(16) }}>
      <Text
        className="font-geom-regular"
        style={{ fontSize: s(13), color: "#8A8A8A", marginBottom: s(4) }}
      >
        {label}
      </Text>
      <Text
        className="font-geom-medium"
        style={{ fontSize: s(18), lineHeight: s(22), color: "#262626" }}
      >
        {value || "—"}
      </Text>
    </View>
  );
}

export default function GroupDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { insets, styles } = useSelectLayout();
  const { s, sx } = useChatsLayout();
  const [proposed, setProposed] = useState(false);

  const member =
    route.params?.member ?? getGroupMemberById(route.params?.memberId);
  const Avatar = AVATARS[member?.role] ?? ProfessionalSvg;
  const showRemoval = canProposeRemoval(member);

  const onProposeRemoval = () => {
    if (!member || proposed) return;
    Alert.alert(
      "Propose removal",
      `Propose removing ${member.name} from your group? Your care circle will be notified.`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Propose",
          style: "destructive",
          onPress: () => setProposed(true),
        },
      ]
    );
  };

  if (!member) {
    return (
      <View className="flex-1 relative">
        <Background />
        <View
          className="z-10 flex-1"
          style={{
            paddingTop: insets.top + s(16),
            paddingHorizontal: styles.sidePad,
          }}
        >
          <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
            <BackIcon width={s(40)} height={s(40)} />
          </Pressable>
          <Text
            className="font-geom-medium"
            style={{ marginTop: s(24), fontSize: s(18), color: "#5A5A5A" }}
          >
            Member not found.
          </Text>
        </View>
      </View>
    );
  }

  const avatarRing = s(120);
  const avatarInner = s(88);
  const cardW = Math.min(sx(380), sx(430) - styles.sidePad * 2);

  return (
    <View className="flex-1 relative">
      <Background />

      <View
        className="z-10 flex-1"
        style={{
          paddingTop: insets.top + s(12),
          paddingBottom: s(28),
          paddingHorizontal: styles.sidePad,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: s(18),
          }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            style={{ marginRight: s(4) }}
          >
            <BackIcon width={s(40)} height={s(40)} />
          </Pressable>
          <Text
            className="font-geom-medium text-[#262626]"
            style={{
              flex: 1,
              fontSize: s(28),
              lineHeight: s(34),
            }}
            numberOfLines={1}
          >
            Member details
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: s(16) }}
        >
          <View
            style={{
              width: cardW,
              alignSelf: "center",
              borderRadius: s(30),
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              paddingHorizontal: s(24),
              paddingTop: s(28),
              paddingBottom: s(28),
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: avatarRing,
                height: avatarRing,
                borderRadius: avatarRing / 2,
                backgroundColor: "#D9D9D9",
                borderWidth: 2,
                borderColor: "#CACACA",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: s(16),
              }}
            >
              <Avatar width={avatarInner} height={avatarInner} />
            </View>

            <Text
              className="font-geom-medium text-[#262626]"
              style={{
                fontSize: s(28),
                lineHeight: s(34),
                textAlign: "center",
                marginBottom: s(6),
              }}
            >
              {member.name}
            </Text>
            <View
              style={{
                backgroundColor: ACCENT,
                borderRadius: s(16),
                paddingHorizontal: s(12),
                paddingVertical: s(4),
                marginBottom: s(24),
              }}
            >
              <Text
                className="font-geom-medium text-white"
                style={{ fontSize: s(13), lineHeight: s(16) }}
              >
                {member.roleLabel}
              </Text>
            </View>

            <View style={{ width: "100%" }}>
              <DetailRow label="Phone" value={member.phone} s={s} />
              <DetailRow label="Email" value={member.email} s={s} />
              <DetailRow label="Role" value={member.roleLabel} s={s} />
              <DetailRow
                label="Relationship"
                value={member.relationship}
                s={s}
              />
              <DetailRow
                label="Linked since"
                value={member.linkedSince}
                s={s}
              />
            </View>

            {showRemoval ? (
              <Pressable
                onPress={onProposeRemoval}
                disabled={proposed}
                accessibilityRole="button"
                accessibilityLabel="Propose removal"
                style={{
                  marginTop: s(12),
                  width: "100%",
                  height: s(48),
                  borderRadius: s(14),
                  borderWidth: 2,
                  borderColor: proposed ? "#A8A8A8" : "#C45C5C",
                  backgroundColor: proposed
                    ? "rgba(168,168,168,0.15)"
                    : "rgba(196,92,92,0.08)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  className="font-geom-medium"
                  style={{
                    fontSize: s(16),
                    color: proposed ? "#8A8A8A" : "#C45C5C",
                  }}
                >
                  {proposed ? "Removal proposed" : "Propose removal"}
                </Text>
              </Pressable>
            ) : (
              <Text
                className="font-geom-regular"
                style={{
                  marginTop: s(8),
                  fontSize: s(13),
                  lineHeight: s(18),
                  color: "#8A8A8A",
                  textAlign: "center",
                }}
              >
                Health professionals can’t be proposed for removal here.
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
