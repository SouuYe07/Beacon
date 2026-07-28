import React from "react";
import { View, useWindowDimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Calendar from "../../navigation/professional/Calendar.js";
import CreateSession from "../../navigation/professional/CreateSession.js";
import Homepage from "../../navigation/professional/Homepage.js";
import Messages from "../../navigation/professional/Messages.js";

import CalendarSvg from "../../../assets/Navigation/Calendar.svg";
import CreateSessionSvg from "../../../assets/Navigation/New Session.svg";
import HomepageSvg from "../../../assets/Navigation/Owl.svg";
import MessagesSvg from "../../../assets/Navigation/Message.svg";

const Tab = createBottomTabNavigator();

// Same height/style as bear/bunny; 320 wide for 4 owl tabs
const TAB_BAR_WIDTH = 320;
const TAB_BAR_HEIGHT = 70;

const ACTIVE_PILL = {
  width: 76,
  height: 68,
  backgroundColor: "rgba(255, 255, 255, 0.38)",
};

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

const Tabs = () => {
  const { width } = useWindowDimensions();
  const sideOffset = Math.max((width - TAB_BAR_WIDTH) / 2, 0);

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
            paddingHorizontal: 4,
            borderRadius: TAB_BAR_HEIGHT / 2,
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
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 0,
          },
          tabBarIconStyle: {
            width: ACTIVE_PILL.width,
            height: ACTIVE_PILL.height,
            marginTop: 0,
            marginBottom: 0,
          },
          tabBarActiveTintColor: "#32759F",
          tabBarInactiveTintColor: "#5A5A5A",
          tabBarIcon: ({ color, focused }) => {
            const IconComponent =
              route.name === "Homepage"
                ? HomepageSvg
                : route.name === "Calendar"
                  ? CalendarSvg
                  : route.name === "Create Session"
                    ? CreateSessionSvg
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
      <Tab.Screen name="Create Session" component={CreateSession} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

export default Tabs;
