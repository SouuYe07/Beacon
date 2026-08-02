import { View, Text } from "react-native";
import ChevronDown from "../../../assets/Icons/chevron-down.svg";
import Day from "./Day.js";
import Search from "../../../assets/Icons/search.svg";

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
                <Search height={20} />

                <Text className="font-geom-medium text-small text-[#0D5583]">
                  Session
                </Text>
              </View>
              <ChevronDown width={15} height={15} color="#0D5583" />
            </View>
          </View>

        </View>

        <View>
          <View className="flex-row">
            <Text className="font-geom-medium text-lg text-center flex-1">Sun</Text>
            <Text className="font-geom-medium text-lg text-center flex-1">Mon</Text>
            <Text className="font-geom-medium text-lg text-center flex-1">Tue</Text>
            <Text className="font-geom-medium text-lg text-center flex-1">Wed</Text>
            <Text className="font-geom-medium text-lg text-center flex-1">Thu</Text>
            <Text className="font-geom-medium text-lg text-center flex-1">Fri</Text>
            <Text className="font-geom-medium text-lg text-center flex-1">Sat</Text>
          </View>

          <View className="flex-row justify-between mt-3">
            <Day day={26} isSession={true} isThisMonth={false} />
            <Day day={27} isSession={false} isThisMonth={false} />
            <Day day={28} isSession={true} isThisMonth={false} />
            <Day day={29} isSession={true} isThisMonth={false} />
            <Day day={30} isSession={false} isThisMonth={false} />
            <Day day={31} isSession={false} isThisMonth={false} />
            <Day day={1} isSession={true} isThisMonth={true} />
          </View>

          <View className="flex-row justify-between mt-2">
            <Day day={2} isSession={true} isThisMonth={true} />
            <Day day={3} isSession={false} isThisMonth={true} />
            <Day day={4} isSession={true} isThisMonth={true} />
            <Day day={5} isSession={true} isThisMonth={true} />
            <Day day={6} isSession={false} isThisMonth={true} />
            <Day day={7} isSession={false} isThisMonth={true} />
            <Day day={8} isSession={true} isThisMonth={true} />
          </View>

          <View className="flex-row justify-between mt-2">
            <Day day={9} isSession={true} isThisMonth={true} />
            <Day day={10} isSession={false} isThisMonth={true} />
            <Day day={11} isSession={true} isThisMonth={true} />
            <Day day={12} isSession={true} isThisMonth={true} />
            <Day day={13} isSession={false} isThisMonth={true} />
            <Day day={14} isSession={true} isThisMonth={true} />
            <Day day={15} isSession={false} isThisMonth={true} />
          </View>

          <View className="flex-row justify-between mt-2">
            <Day day={16} isSession={false} isThisMonth={true} />
            <Day day={17} isSession={true} isThisMonth={true} />
            <Day day={18} isSession={true} isThisMonth={true} />
            <Day day={19} isSession={false} isThisMonth={true} />
            <Day day={20} isSession={false} isThisMonth={true} />
            <Day day={21} isSession={true} isThisMonth={true} />
            <Day day={22} isSession={true} isThisMonth={true} />
          </View>

          <View className="flex-row justify-between mt-2">
            <Day day={23} isSession={false} isThisMonth={true} />
            <Day day={24} isSession={true} isThisMonth={true} />
            <Day day={25} isSession={true} isThisMonth={true} />
            <Day day={26} isSession={false} isThisMonth={true} />
            <Day day={27} isSession={false} isThisMonth={true} />
            <Day day={28} isSession={true} isThisMonth={true} />
            <Day day={29} isSession={true} isThisMonth={true} />
          </View>

          <View className="flex-row justify-between mt-2">
            <Day day={30} isSession={false} isThisMonth={true} />
            <Day day={31} isSession={true} isThisMonth={true} />
            <Day day={1} isSession={true} isThisMonth={false} />
            <Day day={2} isSession={false} isThisMonth={false} />
            <Day day={3} isSession={false} isThisMonth={false} />
            <Day day={4} isSession={true} isThisMonth={false} />
            <Day day={5} isSession={true} isThisMonth={false} />
          </View>
        </View>
      </View>
    </View>
  );
}
