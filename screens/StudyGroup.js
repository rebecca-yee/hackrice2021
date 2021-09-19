import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import ListItem from "../components/ListItem";
import Request from "./Request";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";

// components

class StudyGroup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Jackie Wu",
      newclas: "MATH",
      input1: "",
      input2: "",
      groups: [
        { id: 0, class: "MATH", num: 5 },
        { id: 0, class: "SCIENCE", num: 2 },
      ],
      mine: [
        { id: 0, name: "Jackie Wu", clas: "MATH", min: 2, max: 6 },
        { id: 0, name: "Jackie Wu", clas: "SCIENCE", min: 2, max: 6 },
      ],

      users: [
        { id: 1, name: "Rebecca Yee", class: "ART", min: 3, max: 5 },
        { id: 1, name: "Rebecca Yee", class: "MATH", min: 3, max: 5 },
        { id: 2, name: "Taylor Shui", class: "ART", min: 3, max: 5 },
        { id: 2, name: "Taylor Shui", class: "SCIENCE", min: 3, max: 5 },
        { id: 3, name: "Theo Schweizer", class: "ART", min: 3, max: 5 },
        { id: 3, name: "Theo Schweizer", class: "HISTORY", min: 3, max: 5 },
      ],
    };
  }

  addNew() {
    let mine = this.state.mine;

    mine.unshift({
      id: 0,
      name: "Jackie Wu",
      class: this.state.newclas,
      min: this.state.input1,
      max: this.state.input2,
    });

    this.setState({
      mine,
      newclas: 'MATH',
      input1: '',
      input2: ''
    });
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
        <View style={styles.balance}></View>
        <View style={styles.input}>
          <ScrollView>
            {this.state.groups.map((group) => (
              <Card>
                <ListItem title="Subject" subtitle={group.class} />
                <ListItem title="Number of students" subtitle={group.num} />
              </Card>
            ))}
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>
              Find a Group!
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
        <Request
          textChange={input2 => this.setState({ input2 })}
          addNew={() => this.addNew()}
        />
        <ScrollView>
          {this.state.mine.map((m) => (
            <Text>{m.class}, {m.min}, {m.max}</Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4F1F4",
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
