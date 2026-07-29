import React from "react";
import { View, Pressable, useWindowDimensions, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Homepage from "../../navigation/patient/Homepage";
import Calendar from "../../navigation/patient/Calendar";
import Group from "../../navigation/patient/Group";
import Food from "../../navigation/patient/Food";
import Messages from "../../navigation/patient/Messages";

import HomepageSvg from "../../../assets/Icons/tab-penguin.svg";
import CalendarSvg from "../../../assets/Navigation/Calendar.svg";
import GroupSvg from "../../../assets/Icons/tab-group.svg";
import FoodSvg from "../../../assets/Icons/tab-food.svg";
import MessagesSvg from "../../../assets/Navigation/Message.svg";

const Tab = createBottomTabNavigator();

const TAB_BAR_WIDTH = 332;
const TAB_BAR_HEIGHT = 70;
const TAB_BAR_RADIUS = 30;
const ACTIVE_PILL_WIDTH = TAB_BAR_WIDTH / 5;
const ICON_SIZE = 29;

const HOME_PILL_RADIUS = {
  borderTopLeftRadius: 30,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 15,
};

const CENTER_PILL_RADIUS = {
  borderTopLeftRadius: 15,
  borderTopRightRadius: 15,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
};

const END_PILL_RADIUS = {
  borderTopLeftRadius: 15,
  borderTopRightRadius: 30,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 30,
};

const ICONS = {
  Homepage: HomepageSvg,
  Calendar: CalendarSvg,
  Group: GroupSvg,
  Food: FoodSvg,
  Messages: MessagesSvg,
};

function PatientTabBar({ state, descriptors, navigation }) {
  const { width } = useWindowDimensions();
  const sideOffset = Math.max((width - TAB_BAR_WIDTH) / 2, 0);

  const current = state.routes[state.index];
  const nestedRoute =
    getFocusedRouteNameFromRoute(current) ??
    (current.name === "Messages" ? "ChatsList" : "FoodPrompt");
  if (current.name === "Messages" && nestedRoute === "ChatThread") {
    return null;
  }
  // Full-screen camera only — prompt + review keep the tab bar
  if (current.name === "Food" && nestedRoute === "FoodCamera") {
    return null;
  }

  return (
    <View style={[styles.wrap, { paddingHorizontal: sideOffset }]} pointerEvents="box-none">
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const { options } = descriptors[route.key];
          const IconComponent = ICONS[route.name];
          const isFirst = index === 0;
          const isLast = index === state.routes.length - 1;

          const pillRadius = isFirst
            ? HOME_PILL_RADIUS
            : isLast
              ? END_PILL_RADIUS
              : CENTER_PILL_RADIUS;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <View
              key={route.key}
              style={[
                styles.item,
                isFirst && styles.itemStart,
                isLast && styles.itemEnd,
              ]}
            >
              <View
                pointerEvents="none"
                style={[styles.pill, pillRadius, focused && styles.pillActive]}
              />
              <Pressable
                accessibilityRole="button"
                accessibilityState={focused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel ?? route.name}
                onPress={onPress}
                android_ripple={{ color: "transparent" }}
                style={styles.pressable}
              >
                <IconComponent
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  color={focused ? "#32759F" : "#5A5A5A"}
                />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <PatientTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Group" component={Group} />
      <Tab.Screen name="Food" component={Food} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 35,
    alignItems: "center",
  },
  bar: {
    width: TAB_BAR_WIDTH,
    height: TAB_BAR_HEIGHT,
    borderRadius: TAB_BAR_RADIUS,
    backgroundColor: "rgba(255, 255, 255, 0.38)",
    borderWidth: 2,
    borderColor: "#D0D2D1",
    flexDirection: "row",
    overflow: "hidden",
  },
  item: {
    flex: 1,
    height: TAB_BAR_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemStart: {
    alignItems: "flex-start",
  },
  itemEnd: {
    alignItems: "flex-end",
  },
  pill: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: ACTIVE_PILL_WIDTH,
    height: TAB_BAR_HEIGHT,
  },
  pillActive: {
    backgroundColor: "rgba(255, 255, 255, 0.55)",
  },
  pressable: {
    width: ACTIVE_PILL_WIDTH,
    height: TAB_BAR_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
