import { View, Text } from 'react-native';
import Penguin from "../../assets/Animals/Patient.svg";

export default function PatientListCard() {
  return (
    <View className="bg-[#FBFBFB] w-[290px] h-[100px] my-1 flex items-center justify-center rounded-[20px]">
      <View className="flex-row items-center gap-x-2">
        <View className="bg-[#D9D9D9] h-[80px] w-[80px] rounded-full border-2 border-[#CACACA] flex items-center justify-center">
          <Penguin width={60} height={60} />
        </View>
        <View>
          <Text className="font-geom-medium text-black text-3xl">
            User user
          </Text>
          <Text className="font-geom-medium text-[#32759F] text-base mt-1 my-[-2px]">
            (+1) 213 555-0123
          </Text>
          <Text className="font-geom-medium text-[#32759F] text-base my-[-4px]">
            Next Talk:August 11, 2026
          </Text>
        </View>
      </View>
    </View >
  );
}
