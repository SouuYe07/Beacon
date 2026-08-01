import { View, Text } from 'react-native';
import Previous from "../../../assets/Icons/back.svg";
import Next from "../../../assets/Icons/next.svg";

export default function MonthSelect() {
  return (
    <View className="w-full px-6 bg-[rgba(255,255,255,0.7)] h-16 rounded-2xl flex-row items-center justify-between">
      <Previous />
      <Text className="font-geom-medium text-3xl text-[#262626]">
        Aug, 2026
      </Text>
      <Next />
    </View>
  );
}
