import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Calendar from "../../navigation/professional/Calendar.js";
import CreateSession from "../../navigation/professional/CreateSession.js";
import Homepage from "../../navigation/professional/Homepage.js";
import Messages from "../../navigation/professional/Messages.js";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Homepage" component={Homepage}/>
      <Tab.Screen name="Calendar" component={Calendar}/>
      <Tab.Screen name="Create Session" component={CreateSession}/>
      <Tab.Screen name="Messages" component={Messages}/>
    </Tab.Navigator>
  );
}

export default Tabs;
