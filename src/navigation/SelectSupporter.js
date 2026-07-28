import { View, Text, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Background from "../components/Background";
import { AccountCard, useSelectLayout } from "./AccountCard";

import Bunny from "../../assets/Animals/Friends.svg";
import PolarBear from "../../assets/Animals/Family.svg";

export default function SelectSupporter() {
  const navigation = useNavigation();
  const { insets, styles } = useSelectLayout();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("SelectUser");
    }
  };

  return (
    <View className="flex-1 relative">
      <Background />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingTop: insets.top + 72,
          paddingBottom: insets.bottom + 16,
          paddingHorizontal: styles.sidePad,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Text
          className="font-geom-medium text-[#262626]"
          style={{
            fontSize: styles.headingSize,
            lineHeight: styles.headingLine,
            width: styles.headingWidth,
            marginBottom: styles.headingGap,
          }}
        >
          Select Your Account Type:
        </Text>

        <AccountCard
          Icon={Bunny}
          title="Bunny"
          description="Friend or peer supporter of a recovering penguin."
          onPress={() => navigation.navigate("FriendsHome", { role: "friend" })}
          styles={styles}
        />

        <AccountCard
          Icon={PolarBear}
          title="Bear"
          description="Family member supporting a recovering penguin."
          onPress={() => navigation.navigate("FriendsHome", { role: "family" })}
          styles={{ ...styles, cardGap: 0 }}
          iconScale={0.78}
          iconOffsetX={10}
        />
      </ScrollView>

      {/* Rendered after ScrollView so presses aren't blocked */}
      <View
        pointerEvents="box-none"
        style={{
          position: "absolute",
          top: insets.top + 20,
          left: 0,
          right: 0,
          paddingHorizontal: styles.sidePad,
          zIndex: 20,
          elevation: 20,
        }}
      >
        <Pressable
          onPress={goBack}
          hitSlop={16}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255,0.8)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="chevron-left" size={28} color="#262626" />
        </Pressable>
      </View>
    </View>
  );
}
