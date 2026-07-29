import { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../Background";
import useFoodLayout from "../../hooks/useFoodLayout";

const ACCENT = "#32759F";
const CARD_W = 380;
const PHOTO_W = 320;
const PHOTO_H = 454;
const DESC_H = 100;
const BTN_H = 35;
const RETRY_W = 84;
const SEND_W = 84;
const RADIUS = 20;
const RADIUS_BTN = 10;

function defaultMealLabel(date = new Date()) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const hour = date.getHours();
  const meal =
    hour < 11 ? "Breakfast" : hour < 16 ? "Lunch" : hour < 21 ? "Dinner" : "Snack";
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${meal}`;
}

export default function FoodReviewScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { s, sx, width, topPad, tabClearance } = useFoodLayout();
  const placeholder = useMemo(() => defaultMealLabel(), []);
  const [description, setDescription] = useState(placeholder);

  const uri = route.params?.uri;
  const titleSize = s(36);
  const descH = s(DESC_H);
  const btnH = s(BTN_H);
  const radius = s(RADIUS);
  const btnRadius = s(RADIUS_BTN);
  const retryW = s(RETRY_W);
  const sendW = s(SEND_W);
  const letterSpacing = s(16) * -0.03;

  const cardPadX = s(28);
  const cardPadY = s(35);
  const cardW = Math.min(sx(CARD_W), width - sx(40));
  // Photo fits inside left/right padding (28px each)
  const photoW = Math.min(sx(PHOTO_W), cardW - cardPadX * 2);
  // Design aspect floor; flex grows the photo on taller phones
  const photoMinH = photoW * (PHOTO_H / PHOTO_W);

  const onRetry = () => {
    navigation.replace("FoodCamera");
  };

  const onSend = () => {
    navigation.navigate("FoodPrompt");
  };

  return (
    <View className="flex-1 relative">
      <Background />

      <KeyboardAvoidingView
        className="z-10 flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
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
            marginBottom: s(20),
          }}
        >
          Post Food
        </Text>

        <View
          style={{
            flex: 1,
            width: cardW,
            alignSelf: "center",
            borderRadius: radius,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            paddingTop: cardPadY,
            paddingBottom: cardPadY,
            paddingHorizontal: cardPadX,
          }}
        >
          <View
            style={{
              flex: 1,
              width: photoW,
              minHeight: photoMinH,
              borderRadius: radius,
              borderWidth: 2,
              borderColor: ACCENT,
              overflow: "hidden",
              backgroundColor: "#E8ECE7",
              alignSelf: "center",
            }}
          >
            {uri ? (
              <Image
                source={{ uri }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            ) : null}
          </View>

          <View style={{ height: s(15) }} />

          <View
            style={{
              width: photoW,
              height: descH,
              alignSelf: "center",
              borderRadius: radius,
              backgroundColor: "#F7F7F5",
              borderWidth: 1,
              borderColor: "#D8D8D4",
              paddingHorizontal: s(14),
              paddingVertical: s(12),
            }}
          >
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder={placeholder}
              placeholderTextColor="#A8A8A8"
              multiline
              textAlignVertical="top"
              className="font-geom-medium"
              style={{
                flex: 1,
                fontSize: s(16),
                lineHeight: s(20),
                color: "#525252",
                letterSpacing,
                padding: 0,
                includeFontPadding: false,
              }}
            />
          </View>

          <View style={{ height: s(23) }} />

          <View
            style={{
              width: photoW,
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={onRetry}
              accessibilityRole="button"
              accessibilityLabel="Retry"
              style={{
                width: retryW,
                height: btnH,
                borderRadius: btnRadius,
                borderWidth: 2,
                borderColor: ACCENT,
                backgroundColor: "transparent",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                className="font-geom-medium"
                style={{ fontSize: s(14), color: ACCENT, lineHeight: s(18) }}
              >
                Retry
              </Text>
            </Pressable>

            <View style={{ width: s(14) }} />

            <Pressable
              onPress={onSend}
              accessibilityRole="button"
              accessibilityLabel="Send"
              style={{
                width: sendW,
                height: btnH,
                borderRadius: btnRadius,
                overflow: "hidden",
              }}
            >
              <LinearGradient
                colors={["#69AAD3", "#32759F"]}
                start={{ x: 0.15, y: 1 }}
                end={{ x: 0.85, y: 0 }}
                style={{
                  flex: 1,
                  borderRadius: btnRadius,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  className="font-geom-medium"
                  style={{ fontSize: s(14), color: "#FFFFFF", lineHeight: s(18) }}
                >
                  Send
                </Text>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
