import { View, Text } from 'react-native';
import Background from '../components/Background';

export default function SelectUser() {
  return (
    <View className="flex-1 relative">
      <Background />

      <View className="flex-1 z-10">
        <Text className="text-3xl font-geom-regular">
          wpoeipcwei
        </Text>
      </View>
    </View>
  );
}
