import { View, Text } from "react-native";

export default function Day({ day, isSession, isThisMonth }) {
  return (
    <View style={{ opacity: isThisMonth ? 1 : 0.3 }} className="basis-0 grow justify-center">
      <Text className="font-geom-medium w-full text-center">
        {day}
      </Text>
      <View style={{ opacity: isSession ? 1 : 0 }} className="grow mx-3 my-[0.5px] py-1 rounded-xl bg-[#32759F]" />
    </View >
  );
}
