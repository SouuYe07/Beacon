import { View, Text } from 'react-native';

export default function NextTalk({ Icon }) {
  return (
    <View className="flex-row bg-[rgba(255,255,255,0.7)] rounded-[20px] px-5 py-3 gap-x-4">
      <View style={{ marginBottom: -30 }}>
        {Icon}
      </View>
      <View className="grow justify-center">
        <Text className="font-geom-medium text-xl">
          August 13, 2026
        </Text>
        <Text className="font-geom-medium leading-none">
          Appointment with Alice {'\n'} at 5:00 PM.
        </Text>
      </View>
    </View>
  );
}
