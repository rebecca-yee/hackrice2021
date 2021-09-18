import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "./components/Chat";
import StudyGroup from "./components/StudyGroup";
import Account from "./components/Account";

const Tab = createBottomTabNavigator();

const Tabs = () => {


    return (
        <Tab.Navigator>
            <Tab.Screen name="my chats" component={Chat} />
            <Tab.Screen name="my groups" component={StudyGroup} />
            <Tab.Screen name="my account" component={Account} />
        </Tab.Navigator>
    );
};

export default Tabs;
