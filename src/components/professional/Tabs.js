import React from 'react';
import { Text } from 'react-native';
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

const Tabs = () => {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
          const IconComponent =
            route.name === "Homepage" ? HomepageSvg :
            route.name === "Calendar" ? CalendarSvg :
            route.name === "Create Session" ? CreateSessionSvg :
            route.name === "Messages" ? MessagesSvg :
            null;

          if (!IconComponent) return null;

          return <IconComponent/>
        }
      })}
    >
      <Tab.Screen name="Homepage" component={Homepage}/>
      <Tab.Screen name="Calendar" component={Calendar}/>
      <Tab.Screen name="Create Session" component={CreateSession}/>
      <Tab.Screen name="Messages" component={Messages}/>
    </Tab.Navigator>
  );
}

export default Tabs;
