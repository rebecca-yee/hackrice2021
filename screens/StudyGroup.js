import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView } from "react-native";

// components

class StudyGroup extends React.Component {

  constructor() {
    super();

    this.state = {
      groups: [
        { id: 0, class: 'MATH', num: 5 },
        { id: 1, class: 'SCIENCE', num: 2 }
      ]
    }

  }

  render() {
    const statusbar =
      Platform.OS == "ios" ? (
        <View style={styles.statusbar}></View>
      ) : (
        <View></View>
      );

    return (
      <View style={styles.container}>
        {statusbar}

        <View style={styles.balance}></View>
        <View style={styles.input}>
          <Text>Your Groups:</Text>
          <ScrollView>
            {this.state.groups.map((group) =>
              <Text>
                {group.class}
                {group.num}
              </Text>
            )}
          </ScrollView>

        </View>
      </View >
    );
  }
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

export default StudyGroup;
