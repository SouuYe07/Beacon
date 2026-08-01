import { View, Text } from "react-native";
import FriendsSvg from "../../../assets/Animals/Friends.svg";
import FamilySvg from "../../../assets/Animals/Family.svg";
import ProfessionalSvg from "../../../assets/Animals/Professional.svg";

const AVATARS = {
  friend: FriendsSvg,
  family: FamilySvg,
  professional: ProfessionalSvg,
};

export default function GroupMemberCard({ name, phone, role, roleLabel, s }) {
  const Avatar = AVATARS[role] ?? ProfessionalSvg;
  const avatarRing = s(88);
  const avatarInner = s(68);
  const cardW = s(320);
  const cardH = s(112);

  return (
    <View
      style={{
        width: cardW,
        minHeight: cardH,
        marginVertical: s(5),
        borderRadius: s(20),
        backgroundColor: "#FBFBFB",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: s(12),
        paddingHorizontal: s(14),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
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
            marginRight: s(12),
          }}
        >
          <Avatar width={avatarInner} height={avatarInner} />
        </View>

        <View style={{ flex: 1, paddingRight: s(4) }}>
          <Text
            className="font-geom-medium text-black"
            style={{ fontSize: s(28), lineHeight: s(32) }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            className="font-geom-medium"
            style={{
              fontSize: s(16),
              lineHeight: s(20),
              color: "#32759F",
              marginTop: s(3),
            }}
            numberOfLines={1}
          >
            {phone}
          </Text>
          <Text
            className="font-geom-medium"
            style={{
              fontSize: s(16),
              lineHeight: s(20),
              color: "#32759F",
              marginTop: s(2),
            }}
            numberOfLines={1}
          >
            {roleLabel}
          </Text>
        </View>
      </View>
    </View>
  );
}
