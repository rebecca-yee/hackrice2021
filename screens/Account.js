import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import ListItem from "../components/ListItem";

// components

function Account() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Image
          style={styles.img}
          source={require("../assets/picture.png")}
        />
        <ListItem title="Name" subtitle="Jackie" />
        <ListItem title="Username" subtitle="@welovehackrice" />

        <Text
          style={{
            marginBottom: 10,
            color: "#05445E",
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Avenir",
          }}
        >
          About
        </Text>
        <Text style={{ color: "black", fontFamily: "Avenir", fontSize: 20 }}>
          When classes were converted to a virtual format due to the rise of
          COVID-19, in-person interactions, like asking a classmate to borrow a
          pencil or walking together with classmates to lunch, were no more. It
          was often these interactions that allowed students in the same class
          to build relationships, and eventually solid friendships.
          {"\n"}
          {"\n"}Aside from awkward breakout rooms, students have almost no
          connection with each other with a virtual teaching format. This makes
          it harder for students to receive academic help from their peers or
          form study groups to prepare for exams. We created StudyBuddy to
          facilitate interactions between students, allowing them to enhance
          their collaborative learning experience while also maintaining
          connections with their peers.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4F1F4",
  },
  img: {
    resizeMode: "cover",
    marginTop: 10,
    marginBottom: 5,
    right: 5,
    bottom: 10,
    height: 350,
    width: 350,
  },
  body: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    paddingTop: 0
  },
  statusbar: {
    backgroundColor: "rgb(192, 165, 192)",
    height: 50,
  }
});

export default Account;
