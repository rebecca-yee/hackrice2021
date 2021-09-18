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
    <View style={styles.container}>
      <View style={styles.body}>
        <ListItem title="Name" subtitle="John Smith" />
        <ListItem title="Username" subtitle="@username" />

        <Text style={{ marginBottom: 10 }}>About</Text>
        <Text style={{ color: "gray" }}>
          When classes were converted to a virtual format due to the rise of
          COVID-19, in-person interactions, like asking a classmate to borrow a
          pencil or walking together with classmates to lunch, were no more. It
          was often these interactions that allowed students in the same class
          to build relationships, and eventually solid friendships.{"\n"}
          {"\n"}Aside from awkward breakout rooms, students have almost no
          connection with each other with a virtual teaching format. This makes
          it harder for students to receive academic help from their peers or
          form study groups to prepare for exams. We created StudyBuddy to
          facilitate interactions between students, allowing them to enhance
          their collaborative learning experience while also maintaining
          connections with their peers.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDF8F2",
  },
  body: {
    margin: 30,
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
