import { View, Text } from "react-native";
import ChevronDown from "../../../assets/Icons/chevron-down.svg";
import Day from "./Day.js";

export default function CalendarComponent({ Icon }) {
  return (
    <View className="w-full rounded-[20px] justify-center bg-[rgba(255,255,255,0.7)]">
      <View className="px-8 py-5 gap-y-5">

        <View className="flex-row gap-x-4">
          <Text className="font-geom-medium text-2xl">
            Filter
          </Text>

          <View className="flex-row gap-x-3">
            <View className="flex-row items-center px-1 justify-between h-8 w-28 border border-[#4D4D4D] rounded-lg">
              <View className="flex-row gap-x-2 items-center h-full">
                {Icon}

                <Text className="font-geom-medium text-small text-[#0D5583]">
                  User
                </Text>
              </View>
              <ChevronDown width={15} height={15} color="#0D5583" />
            </View>

            <View className="flex-row items-center px-1 justify-between h-8 w-32 border border-[#4D4D4D] rounded-lg">
              <View className="flex-row gap-x-2 items-center h-full">
                {Icon}

                <Text className="font-geom-medium text-small text-[#0D5583]">
                  Session
                </Text>
              </View>
              <ChevronDown width={15} height={15} color="#0D5583" />
            </View>
          </View>

        </View>

        <View>
          <View className="flex-row justify-between">
            <Text className="font-geom-medium text-lg">Sun</Text>
            <Text className="font-geom-medium text-lg">Mon</Text>
            <Text className="font-geom-medium text-lg">Tue</Text>
            <Text className="font-geom-medium text-lg">Wed</Text>
            <Text className="font-geom-medium text-lg">Thu</Text>
            <Text className="font-geom-medium text-lg">Fri</Text>
            <Text className="font-geom-medium text-lg">Sat</Text>
          </View>
        </View>


      </View>
    </View>
  );
}
