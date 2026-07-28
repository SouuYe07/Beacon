import { View, Text, Pressable } from 'react-native';
import Background from '../components/Background';

import Patient from '../../assets/Animals/Patient.svg';
import Professional from '../../assets/Animals/Professional.svg';
import Friends from '../../assets/Animals/Friends.svg';

export default function SelectUser() {
  return (
    <View className="flex-1 relative">
      <Background />

      <View className="flex-1 z-10 justify-center mx-8">
        <Text className="font-geom-medium text-4xl text-[#262626] w-60 mb-6">
          Select Your Account Type:
        </Text>

        <Pressable className="mb-4 w-full h-[190px] bg-[#ffffff] opacity-80 rounded-[30px] flex-row items-center">
          <Patient />
          <View className="flex-1">
            <Text className="font-geom-medium text-4xl text-[#262626]">
              Penguin
            </Text>
            <Text className="font-geom-medium text-base leading-4 mr-8">
              A Patient recovering from Anorexia Nervosa.
            </Text>
          </View>
        </Pressable>

        <Pressable className="mb-4 w-full h-[190px] bg-[#ffffff] opacity-80 rounded-[30px] flex-row items-center">
          <Professional />
          <View className="flex-1">
            <Text className="font-geom-medium text-4xl text-[#262626]">
              Owl
            </Text>
            <Text className="font-geom-medium text-base leading-4 mr-8">
              Therapist, dietician, or any health professional assisting a patient.
            </Text>
          </View>
        </Pressable>

        <Pressable className="w-full h-[190px] bg-[#ffffff] opacity-80 rounded-[30px] flex-row items-center">
          <Friends />
          <View className="flex-1">
            <Text className="font-geom-medium text-4xl text-[#262626]">
              Bunny
            </Text>
            <Text className="font-geom-medium text-base leading-4 mr-8">
              Family, friend, or supporter of a recovering penguin.
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
