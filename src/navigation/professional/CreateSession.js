import { View, Text, ScrollView, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Background from "../../components/Background";
import OwlSvg from "../../../assets/Navigation/Penguin.svg";
import useSelectLayout from "../../hooks/useSelectLayout";
import ChevronDown from "../../../assets/Icons/chevron-down.svg";
import Calendar from "../../../assets/Navigation/Calendar.svg";
import Clock from "../../../assets/Icons/clock.svg";

export default function CreateSession() {
  const { insets, styles } = useSelectLayout();

  return (
    <View className="flex-1 relative">
      <Background />

      <ScrollView
        className="z-10 flex-1"
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
        <Text 
          className="font-geom-medium leading-none pl-2"
          style={{
            fontSize: styles.headingSize,
            lineHeight: styles.headingLine,
            width: styles.headingWidth,
            marginBottom: styles.headingGap,
          }}
        >
          Schedule {"\n"}New Session
        </Text>

        <View className="w-full h-[580px] gap-y-4 bg-white/70 rounded-[20px] p-8 overflow-hidden justify-between">
          <View className="gap-y-2 mt-2">
            <Text className="font-geom-medium text-black text-3xl">
              Select Patient
            </Text>
            
            <View className="flex-row border-[1.5px] border-[#262626] items-center justify-between w-full h-12 px-3 rounded-xl">
              <View className="flex-row ">
                <OwlSvg className="ml-2" color="#32759f"/>
                <Text className="text-black text-2xl font-geom-regular ml-4">
                  User User
                </Text>
              </View>
              <ChevronDown />
            </View>
          </View>

          <View className="gap-y-2">
            <Text className="font-geom-medium text-black text-3xl">
              Select Date
            </Text>
            
            <View className="flex-row border-[1.5px] border-[#262626] items-center justify-between w-full h-12 px-3 rounded-xl">
              <View className="flex-row ">
                <Calendar className="ml-2" color="#32759f"/>
                <Text className="text-black text-2xl font-geom-regular ml-4">
                  08/22/2026
                </Text>
              </View>
            </View>
          </View>

          <View className="gap-y-2">
            <Text className="font-geom-medium text-black text-3xl">
              Select Time
            </Text>
            
            <View className="flex-row border-[1.5px] border-[#262626] items-center justify-between w-full h-12 px-3 rounded-xl">
              <View className="flex-row ">
                <Clock className="ml-2" color="#32759f"/>
                <Text className="text-black text-2xl font-geom-regular ml-4">
                  3:00 PM
                </Text>
              </View>
            </View>
          </View>

          <View className="gap-y-2">
            <Text className="font-geom-medium text-black text-3xl">
              Description
            </Text>
            
            <TextInput 
              className="w-full rounded-xl border-[1.5px] border-[#262626] h-[150px] font-geom-medium"
              placeholder="Enter description here"
              multiline={true}
              style={{textAlignVertical: 'top', paddingHorizontal: 10}}
            />
          </View>

          <LinearGradient
            colors={['#69AAD3', '#32759F']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            className="w-28 h-10 flex items-center justify-center ml-auto"
            style={{borderRadius: 10}}
          >
            <Text className="font-geom-medium text-white text-xl">
              Submit
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}
