import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Rect } from "react-native-svg";
import Background from "../Background";
import useFoodLayout from "../../hooks/useFoodLayout";
import CameraIcon from "../../../assets/Icons/food-camera.svg";

const OUTER_W = 380;
const OUTER_H = 361;
const RADIUS = 20;
const INNER_INSET = 22;
const CAMERA_SIZE = 85;

export default function PostFoodScreen() {
  const navigation = useNavigation();
  const { s, sx, width, height, topPad, tabClearance } = useFoodLayout();

  const titleSize = s(36);
  const titleBlock = titleSize * 1.15 + s(24);
  const available = Math.max(height - topPad - titleBlock - tabClearance, s(280));

  const outerW = Math.min(sx(OUTER_W), width - sx(40));
  // Elongate to fill most of the space between title and tab bar
  const outerH = Math.min(
    Math.max(s(OUTER_H), available * 0.92),
    available * 0.98
  );
  const radius = s(RADIUS);
  const inset = s(INNER_INSET);
  const innerW = Math.max(outerW - inset * 2, 0);
  const innerH = Math.max(outerH - inset * 2, 0);
  const cam = s(CAMERA_SIZE);

  return (
    <View className="flex-1 relative">
      <Background />

      <View
        className="z-10 flex-1"
        style={{
          paddingTop: topPad,
          paddingBottom: tabClearance,
          paddingHorizontal: sx(25),
        }}
      >
        <Text
          className="font-geom-medium"
          style={{
            fontSize: titleSize,
            lineHeight: titleSize * 1.15,
            color: "#262626",
            marginBottom: s(24),
          }}
        >
          Post Food
        </Text>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Pressable
            onPress={() => navigation.navigate("FoodCamera")}
            accessibilityRole="button"
            accessibilityLabel="Take a Photo"
            style={{
              width: outerW,
              height: outerH,
              borderRadius: radius,
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <View
              style={{
                width: innerW,
                height: innerH,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Svg
                width={innerW}
                height={innerH}
                style={{ position: "absolute", top: 0, left: 0 }}
              >
                <Rect
                  x={1.5}
                  y={1.5}
                  width={Math.max(innerW - 3, 0)}
                  height={Math.max(innerH - 3, 0)}
                  rx={radius}
                  ry={radius}
                  fill="#E8ECE7"
                  stroke="#9A9E9A"
                  strokeWidth={1.5}
                  strokeDasharray="8 8"
                />
              </Svg>

              <CameraIcon width={cam} height={cam} />
              <Text
                className="font-geom-medium"
                style={{
                  marginTop: s(12),
                  fontSize: s(30),
                  lineHeight: s(36),
                  color: "#525252",
                  textAlign: "center",
                }}
              >
                Take a Photo
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
