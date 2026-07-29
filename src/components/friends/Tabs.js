import React from "react";
import { View, Pressable, useWindowDimensions, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Homepage from "../../navigation/friends/Homepage";
import Calendar from "../../navigation/friends/Calendar";
import Messages from "../../navigation/friends/Messages";
import { FriendsRoleContext } from "./FriendsRoleContext";

import BearSvg from "../../../assets/Navigation/Bear.svg";
import BunnySvg from "../../../assets/Navigation/Bunny.svg";
import CalendarSvg from "../../../assets/Navigation/Calendar.svg";
import MessagesSvg from "../../../assets/Navigation/Message.svg";

const Tab = createBottomTabNavigator();

const TAB_BAR_WIDTH = 280;
const TAB_BAR_HEIGHT = 70;
const TAB_BAR_RADIUS = 30;
const ACTIVE_PILL_WIDTH = 85;
const ICON_SIZE = 29;

/** Edge selector: outer 30, inner 15 */
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

function FriendsTabBar({ state, descriptors, navigation, HomeIcon }) {
  const { width } = useWindowDimensions();
  const sideOffset = Math.max((width - TAB_BAR_WIDTH) / 2, 0);

  const current = state.routes[state.index];
  const nestedRoute = getFocusedRouteNameFromRoute(current) ?? "ChatsList";
  if (current.name === "Messages" && nestedRoute === "ChatThread") {
    return null;
  }

  return (
    <View style={[styles.wrap, { paddingHorizontal: sideOffset }]} pointerEvents="box-none">
      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const { options } = descriptors[route.key];

          const IconComponent =
            route.name === "Homepage"
              ? HomeIcon
              : route.name === "Calendar"
                ? CalendarSvg
                : MessagesSvg;

          const pillRadius =
            route.name === "Homepage"
              ? HOME_PILL_RADIUS
              : route.name === "Messages"
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
                route.name === "Homepage" && styles.itemStart,
                route.name === "Messages" && styles.itemEnd,
              ]}
            >
              {/* Static highlight layer — always keeps corner radii */}
              <View
                pointerEvents="none"
                style={[
                  styles.pill,
                  pillRadius,
                  focused && styles.pillActive,
                ]}
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

/**
 * @param {{ role?: 'friend' | 'family' }} props
 */
export default function Tabs({ role = "family" }) {
  const HomeIcon = role === "friend" ? BunnySvg : BearSvg;

  return (
    <FriendsRoleContext.Provider value={role}>
      <Tab.Navigator
        tabBar={(props) => <FriendsTabBar {...props} HomeIcon={HomeIcon} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Homepage" component={Homepage} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
    </FriendsRoleContext.Provider>
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
    // Stacked on the 38% bar so the selector reads clearly
    backgroundColor: "rgba(255, 255, 255, 0.55)",
  },
  pressable: {
    width: ACTIVE_PILL_WIDTH,
    height: TAB_BAR_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
