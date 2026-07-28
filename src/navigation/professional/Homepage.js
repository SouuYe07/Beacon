import { Text, View } from 'react-native';
import Background from "../../components/Background.js";

export default function Homepage() {
  return (
    <View className="flex-1 relative">
      <Background />

      <View className="flex-1 z-10 justify-center mx-8">
      </View>
    </View>
  );
}
