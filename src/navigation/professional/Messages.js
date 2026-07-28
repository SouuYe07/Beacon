import { View } from "react-native";
import Background from "../../components/Background";

export default function Messages() {
  return (
    <View className="flex-1 relative">
      <Background />
      <View className="flex-1 z-10" />
    </View>
  );
}
