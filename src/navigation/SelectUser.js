import { View, Text } from 'react-native';
import Background from '../components/Background';

export default function SelectUser() {
  return (
    <View className="flex-1 relative">
      <Background />

      <View className="flex-1 z-10 justify-center items-center">
        <Text>
          wieuriwuce
        </Text>
      </View>
    </View>
  );
}
