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
  TouchableOpacity
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
        { id: 0, class: "MATH", num: 5 },
        { id: 0, class: "SCIENCE", num: 2 },
      ],
      mine: [
        { id: 0, name: "Jackie Wu", clas: "MATH", min: 2, max: 6 },
        { id: 0, name: "Jackie Wu", clas: "SCIENCE", min: 4, max: 7 },
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

  add(value) {
    this.setState({ newclas: value })
  }

  input1(input1) {
    this.setState({ input1: input1 })
  }

  input2(input2) {
    this.setState({ input2: input2 })
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

    this.setState({
      mine,
      newclas: 'MATH',
      input1: '2',
      input2: '5'
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
        <ScrollView>
          <ScrollView>
            {this.state.mine.map((m) => (
              <Text>Class: {m.clas}, Min: {m.min}, Max: {m.max}</Text>
            ))}
          </ScrollView>
          <Picker
            selectedValue={this.state.newclas}
            style={{ height: 20, width: 100 }}
            style={styles.dropdown}
            onValueChange={value => this.add(value)
            }
          >
            <Picker.Item label="Math" value="MATH" />
            <Picker.Item label="Science" value="SCIENCE" />
            <Picker.Item label="English" value="ENGLISH" />
            <Picker.Item label="History" value="HISTORY" />
            <Picker.Item label="Art" value="ART" />
            <Picker.Item label="Music" value="MUSIC" />
          </Picker>
          <Picker
            selectedValue={this.state.input1}
            style={{ height: 20, width: 100 }}
            style={styles.dropdown}
            onValueChange={value => this.input1(value)
            }
          >
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
          </Picker>
          <Picker
            selectedValue={this.state.input2}
            style={{ height: 20, width: 100 }}
            style={styles.dropdown}
            onValueChange={value => this.input2(value)
            }
          >
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
          </Picker>
          <TouchableOpacity style={styles.addButton} onPress={this.addNew.bind(this)}>
            <Text style={styles.addButtonText}>submit</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* <Request
          textChange={input1 => this.setState({ input1 })}
          textChange={input2 => this.setState({ input2 })}
          addNew={() => this.addNew()}
        /> */}

      </View >
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
