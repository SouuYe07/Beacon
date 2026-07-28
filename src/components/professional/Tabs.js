import React from 'react';
import { View } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Calendar from "../../navigation/professional/Calendar.js";
import CreateSession from "../../navigation/professional/CreateSession.js";
import Homepage from "../../navigation/professional/Homepage.js";
import Messages from "../../navigation/professional/Messages.js";

import CalendarSvg from "../../../assets/Navigation/Calendar.svg";
import CreateSessionSvg from "../../../assets/Navigation/New Session.svg";
import HomepageSvg from "../../../assets/Navigation/Owl.svg";
import MessagesSvg from "../../../assets/Navigation/Message.svg";

const Tab = createBottomTabNavigator();

const TAB_BAR_WIDTH = 320;

const Tabs = () => {
  const { width } = useWindowDimensions();
  const sideOffset = Math.max((width - TAB_BAR_WIDTH) / 2, 0);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 35,
          start: sideOffset,
          end: sideOffset,
          width: undefined,
          height: 70,
          paddingTop: 0,
          paddingBottom: 0,
          borderRadius: 15,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarIconStyle: {
          flex: 1,
        },
        tabBarActiveTintColor: '#32759F',
        tabBarInactiveTintColor: '#5A5A5A',
        tabBarIcon: ({ color, focused }) => {
          const IconComponent =
            route.name === "Homepage" ? HomepageSvg :
              route.name === "Calendar" ? CalendarSvg :
                route.name === "Create Session" ? CreateSessionSvg :
                  route.name === "Messages" ? MessagesSvg :
                    null;

          if (!IconComponent) return null;

          return (
            <View
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 25,
                backgroundColor: focused ? 'rgba(255, 255, 255, 0.38)' : 'transparent',
                flex: '1',
                justifyContent: 'center',
                alignItem: 'center'
              }}
            >
              <IconComponent color={color} />
            </View>
          );
        }
      })}
    >
      <Tab.Screen name="Homepage" component={Homepage} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Create Session" component={CreateSession} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}

export default Tabs;
