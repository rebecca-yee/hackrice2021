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
  Picker,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

// components

class StudyGroup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Jackie Wu",
      newclas: "MATH",
      input1: "2",
      input2: "5",
      groups: [
        { class: "MATH 355", num: 5 },
        { class: "COMP 140", num: 3 },
      ],
      mine: [
        { id: 0, name: "Jackie Wu", clas: "MATH 355", min: 4, max: 6 },
        { id: 0, name: "Jackie Wu", clas: "COMP 140", min: 3, max: 7 },
      ],

      users: [
        { id: 1, name: "Rebecca Yee", class: "MUSI 317", min: 3, max: 5 },
        { id: 1, name: "Rebecca Yee", class: "MATH 355", min: 3, max: 5 },
        { id: 2, name: "Taylor Shui", class: "MUSI 317", min: 3, max: 5 },
        { id: 2, name: "Taylor Shui", class: "COMP 140", min: 3, max: 5 },
        { id: 3, name: "Theo Schweizer", class: "MUSI 317", min: 3, max: 5 },
        { id: 3, name: "Theo Schweizer", class: "FWIS 189", min: 3, max: 5 },
      ],
    };
  }

  add(value) {
    this.setState({ newclas: value });
  }

  input1(input1) {
    this.setState({ input1: input1 });
  }

  input2(input2) {
    this.setState({ input2: input2 });
  }

  warn() {
    Alert.alert("No groups found", "Try again later!", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }

  addNew() {
    let mine = this.state.mine;

    mine.unshift({
      id: 0,
      name: "Jackie Wu",
      clas: this.state.newclas,
      min: this.state.input1,
      max: this.state.input2,
    });

    let groups = this.state.groups;
    let users = this.state.users;

    let num = 1;
    let rows = [this.state.name];
    for (var i = 0; i < users.length; i++) {
      if (users[i].class == this.state.newclas) {
        if (
          users[i].min >= parseInt(this.state.input1) &&
          users[i].max < parseInt(this.state.input2) &&
          num < users[i].max
        ) {
          num = num + 1;
          rows.push(users[i].name);
        }
      }
    }
    if (num > 2) {
      groups.unshift({
        class: this.state.newclas,
        num: num,
        users: rows,
      });
    } else {
      this.warn();
    }

    this.setState({
      groups,
    });

    this.setState({
      mine,
      newclas: "MATH",
      input1: "2",
      input2: "5",
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
          <ScrollView style={{ height: 300 }}>
            {this.state.groups.map((group) => (
              <Card>
                <ListItem title="Subject" subtitle={group.class} />
                <ListItem title="Number of students" subtitle={group.num} />
              </Card>
            ))}
          </ScrollView>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#05445E" }} />
          <View>
            <Text
              style={{
                width: 50,
                textAlign: "center",
                fontFamily: "Avenir",
                fontWeight: "bold",
                color: "#05445E",
              }}
            >
              Find a Group!
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#05445E" }} />
        </View>
        <ScrollView>
          <Text
            style={{
              color: "black",
              fontFamily: "Avenir",
              fontSize: 20,
              textAlign: "center",
              top: 80,
            }}
          >
            Choose Class
          </Text>

          {/* {this.state.groups.map((group) => {
            <Text>{group.class}, {group.num}</Text>
          })} */}

          <Picker
            selectedValue={this.state.newclas}
            onValueChange={(value) => this.add(value)}
            style={{ width: 200, left: 90 }}
          >
            <Picker.Item label="MATH 355" value="MATH" />
            <Picker.Item label="POLI 212" value="POLI" />
            <Picker.Item label="ENGL 305" value="ENGL" />
            <Picker.Item label="STAT 410" value="STAT" />
            <Picker.Item label="MUSI 317" value="MUSI" />
            <Picker.Item label="COMP 140" value="COMP" />
          </Picker>
          <Text
            style={{
              color: "black",
              fontFamily: "Avenir",
              fontSize: 20,
              textAlign: "center",
              top: 80,
            }}
          >
            Minimum Size
          </Text>
          <Picker
            selectedValue={this.state.input1}
            onValueChange={(value) => this.input1(value)}
            style={{ width: 200, left: 90 }}
          >
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
          </Picker>
          <Text
            style={{
              color: "black",
              fontFamily: "Avenir",
              fontSize: 20,
              textAlign: "center",
              top: 80,
            }}
          >
            Maximum Size
          </Text>
          <Picker
            selectedValue={this.state.input2}
            onValueChange={(value) => this.input2(value)}
            style={{ width: 200, left: 90 }}
          >
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
          </Picker>
          <TouchableOpacity
            style={styles.addButton}
            onPress={this.addNew.bind(this)}
          >
            <Text style={styles.addButtonText}>submit</Text>
          </TouchableOpacity>
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
  addButton: {
    backgroundColor: "#05445E",
    borderRadius: 10,
    marginHorizontal: 100,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 20,
    fontFamily: "Avenir",
  },
  input: {
    paddingBottom: 20,
    alignItems: "center",
  },
});

export default StudyGroup;
