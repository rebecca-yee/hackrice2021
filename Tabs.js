import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./screens/Chat";
import StudyGroup from "./screens/StudyGroup";
import Account from "./screens/Account";
import Request from "./screens/Request"

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Study Groups" component={StudyGroup} />
      <Tab.Screen name="Join" component={Request} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Tabs;
