import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListItem from "../components/ListItem";

// components

function Account() {
  return (
    <View>
      <ListItem title="Name" subtitle="John Smith" />
      <ListItem title="Username" subtitle="@username" />
      <ListItem title="About" subtitle="insert about paragraph here" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF8F2",
  },
  statusbar: {
    backgroundColor: "rgb(192, 165, 192)",
    height: 50,
  },
  balance: {
    paddingBottom: 20,
  },
  input: {
    paddingBottom: 20,
    alignItems: "center",
  },
});

export default Account;
