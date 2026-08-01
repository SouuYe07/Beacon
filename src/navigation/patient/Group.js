import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupListScreen from "../../components/patient/GroupListScreen";
import GroupDetailScreen from "../../components/patient/GroupDetailScreen";

const Stack = createNativeStackNavigator();

export default function Group() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GroupList" component={GroupListScreen} />
      <Stack.Screen name="GroupDetail" component={GroupDetailScreen} />
    </Stack.Navigator>
  );
}
