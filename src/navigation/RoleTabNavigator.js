import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getTabsForRole } from "./tabConfig";
import GlassTabBar from "./GlassTabBar";

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ title }) {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg text-gray-700">{title}</Text>
    </View>
  );
}

/**
 * @param {{ role?: import('./tabConfig').UserRole }} props
 */
export default function RoleTabNavigator({ role = "patient" }) {
  const tabs = getTabsForRole(role);

  return (
    <Tab.Navigator
      tabBar={(props) => <GlassTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          options={{
            tabConfig: tab,
            title: tab.name,
          }}
        >
          {() => <PlaceholderScreen title={tab.name} />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
}
