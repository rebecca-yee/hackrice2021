import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Find from "./components/Find";
import Group from "./components/Group";
import Home from "./components/Home";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="my chats" component={Find} />
      <Tab.Screen name="my groups" component={Group} />
      <Tab.Screen name="my account" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
