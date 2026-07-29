import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatsScreen from "../components/chats/ChatsScreen";
import ChatThreadScreen from "../components/chats/ChatThreadScreen";

const Stack = createNativeStackNavigator();

export default function MessagesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatsList" component={ChatsScreen} />
      <Stack.Screen name="ChatThread" component={ChatThreadScreen} />
    </Stack.Navigator>
  );
}
