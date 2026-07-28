import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../components/Background";
import { AccountCard, useSelectLayout } from "./AccountCard";

import Patient from "../../assets/Animals/Patient.svg";
import Professional from "../../assets/Animals/Professional.svg";
import Friends from "../../assets/Animals/Friends.svg";

export default function SelectUser() {
  const navigation = useNavigation();
  const { insets, styles } = useSelectLayout();

  return (
    <View className="flex-1 relative">
      <Background />

      <ScrollView
        className="z-10"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          paddingTop: insets.top + 12,
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
          Icon={Patient}
          title="Penguin"
          description="A Patient recovering from Anorexia Nervosa."
          styles={styles}
        />

        <AccountCard
          Icon={Professional}
          title="Owl"
          description="Therapist, dietician, or any health professional assisting a patient."
          onPress={() => navigation.navigate("Professional")}
          styles={styles}
        />

        <AccountCard
          Icon={Friends}
          title="Bunny"
          description="Family, friend, or supporter of a recovering penguin."
          onPress={() => navigation.navigate("SelectSupporter")}
          styles={{ ...styles, cardGap: 0 }}
        />
      </ScrollView>
    </View>
  );
}
