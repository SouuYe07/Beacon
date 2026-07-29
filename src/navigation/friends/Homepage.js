import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendsHomeScreen from "../../components/friends/FriendsHomeScreen";
import UpdateDetail from "./UpdateDetail";

const Stack = createNativeStackNavigator();

export default function Homepage() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={FriendsHomeScreen} />
      <Stack.Screen name="UpdateDetail" component={UpdateDetail} />
    </Stack.Navigator>
  );
}
