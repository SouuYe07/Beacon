import React from "react";
import { View, useWindowDimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Homepage from "../../navigation/friends/Homepage";
import Calendar from "../../navigation/friends/Calendar";
import Messages from "../../navigation/friends/Messages";

import BearSvg from "../../../assets/Navigation/Bear.svg";
import BunnySvg from "../../../assets/Navigation/Bunny.svg";
import CalendarSvg from "../../../assets/Navigation/Calendar.svg";
import MessagesSvg from "../../../assets/Navigation/Message.svg";

const Tab = createBottomTabNavigator();

const TAB_BAR_WIDTH = 280;
const TAB_BAR_HEIGHT = 70;

const ACTIVE_PILL = {
  width: 85,
  height: 68,
  backgroundColor: "rgba(255, 255, 255, 0.38)",
};

/** Left tab (bear): follows the bar’s left end through ~1/3 of the bar */
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

/**
 * @param {{ role?: 'friend' | 'family' }} props
 */
export default function Tabs({ role = "family" }) {
  const { width } = useWindowDimensions();
  const sideOffset = Math.max((width - TAB_BAR_WIDTH) / 2, 0);
  const HomeIcon = role === "friend" ? BunnySvg : BearSvg;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const pillRadius =
          route.name === "Homepage"
            ? HOME_PILL_RADIUS
            : route.name === "Messages"
              ? END_PILL_RADIUS
              : CENTER_PILL_RADIUS;

        return {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 35,
            start: sideOffset,
            end: sideOffset,
            height: TAB_BAR_HEIGHT,
            paddingTop: 0,
            paddingBottom: 0,
            borderRadius: TAB_BAR_HEIGHT / 2,
            // Transparent shell so rgba opacity isn't washed out by an opaque default
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderWidth: 1,
            borderColor: "#D0D2D1",
            elevation: 0,
            shadowOpacity: 0,
            overflow: "hidden",
          },
          tabBarBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(255, 255, 255, 0.38)",
                borderRadius: TAB_BAR_HEIGHT / 2,
              }}
            />
          ),
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarIconStyle: {
            width: ACTIVE_PILL.width,
            height: ACTIVE_PILL.height,
          },
          tabBarActiveTintColor: "#32759F",
          tabBarInactiveTintColor: "#5A5A5A",
          tabBarIcon: ({ color, focused }) => {
            const IconComponent =
              route.name === "Homepage"
                ? HomeIcon
                : route.name === "Calendar"
                  ? CalendarSvg
                  : route.name === "Messages"
                    ? MessagesSvg
                    : null;

            if (!IconComponent) return null;

            return (
              <View
                style={{
                  width: ACTIVE_PILL.width,
                  height: ACTIVE_PILL.height,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused
                    ? ACTIVE_PILL.backgroundColor
                    : "transparent",
                  ...pillRadius,
                }}
              >
                <IconComponent width={29} height={29} color={color} />
              </View>
            );
          },
        };
      }}
    >
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}
