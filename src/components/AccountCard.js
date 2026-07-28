import { View, Text, Pressable } from "react-native";

export default function AccountCard({
  Icon,
  title,
  description,
  onPress,
  styles,
  iconScale = 1,
  iconOffsetX = 0,
}) {
  const iconWidth = styles.iconWidth * iconScale;
  const iconHeight = styles.iconHeight * iconScale;

  return (
    <Pressable
      onPress={onPress}
      style={{
        width: "100%",
        height: styles.cardHeight,
        marginBottom: styles.cardGap,
        backgroundColor: "#ffffff",
        opacity: 0.8,
        borderRadius: styles.cardRadius,
        flexDirection: "row",
        alignItems: "center",
        paddingRight: styles.cardPadRight,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          width: styles.iconWidth,
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ transform: [{ translateX: iconOffsetX }] }}>
          <Icon width={iconWidth} height={iconHeight} />
        </View>
      </View>
      <View style={{ flex: 1, paddingRight: styles.textPadRight }}>
        <Text
          className="font-geom-medium text-[#262626]"
          style={{ fontSize: styles.titleSize, lineHeight: styles.titleLine }}
        >
          {title}
        </Text>
        <Text
          className="font-geom-medium text-[#262626]"
          style={{ fontSize: styles.bodySize, lineHeight: styles.bodyLine }}
        >
          {description}
        </Text>
      </View>
    </Pressable>
  );
}
