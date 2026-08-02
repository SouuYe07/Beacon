import { View, ScrollView, Text } from "react-native";
import Background from "../components/Background";
import useSelectLayout from "../hooks/useSelectLayout";
import MonthSelect from "../components/calendar/MonthSelect";
import CalendarComponent from "../components/calendar/CalendarComponent";
import NextTalk from "../components/calendar/NextTalk";

export default function CalendarPage({ Icon, Image }) {
  const { insets, styles } = useSelectLayout();

  return (
    <View className="flex-1 relative">
      <Background />
      <ScrollView
        className="z-10 flex-1 h-full"
        contentContainerStyle={{
          flexGrow: 1,
          justify: "center",
          paddingTop: insets.top + 29,
          paddingBottom: insets.bottom,
          paddingHorizontal: styles.sidePad,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View className="gap-y-4">
          <Text
            className="font-geom-medium leading-none pl-2"
            style={{
              fontSize: styles.headingSize,
              lineHeight: styles.headingLine,
              width: styles.headingWidth,
              marginBottom: styles.headingGap,
            }}
          >
            Calendar
          </Text>

          <MonthSelect />
          <CalendarComponent Icon=<Icon height={20} color="#0D5583" /> />
          <NextTalk Icon=<Image width={100} height={120} /> />
        </View>
      </ScrollView>
      <View />
    </View>
  );
}
