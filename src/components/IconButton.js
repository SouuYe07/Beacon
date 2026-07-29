import { Pressable } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ProfileSummaryModal from "./homepage/ProfileSummaryModal";
import NotificationsModal from './homepage/NotificationsModal';
import UpdateDetailModal from './homepage/UpdateDetailModal';

export default function IconButton({
  name, Icon, onPress, size, buttonSize, accessibilityLabel, iconColor = "#262626"
}) {
  const hit = buttonSize ?? size + 18;

  return (
    <Pressable
      onPress={onPress}
      hitSlop={6}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      android_ripple={{ color: "transparent" }}
      style={{
        width: hit,
        height: hit,
        borderRadius: hit / 2,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {Icon ? (
        <Icon width={size} height={size} color={iconColor} />
      ) : (
        <MaterialCommunityIcons name={name} size={size} color={iconColor} />
      )}
    </Pressable>

  );
}

