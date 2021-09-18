import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Picker,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components

const Request = (props) => {
  const [selectedValue, setSelectedValue] = useState("math");
  const [selectedValue1, setSelectedValue1] = useState("2");
  const [selectedValue2, setSelectedValue2] = useState("3");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.body}>
        <Text>Find a Group!</Text>
        <View>
          <Text>Class:</Text>
          <View>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 20, width: 100 }}
              style={styles.dropdown}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Math" value="MATH" />
              <Picker.Item label="Science" value="SCIENCE" />
              <Picker.Item label="English" value="ENGLISH" />
              <Picker.Item label="History" value="HISTORY" />
              <Picker.Item label="Art" value="ART" />
              <Picker.Item label="Music" value="MUSIC" />
            </Picker>
          </View>
        </View>
        <View style={styles.size}>
          {/* <Text>Minimum Group Size:</Text>
                    <TextInput
                        onChangeText={(input1) => props.textChange(input1)}
                        value={props.input1}
                        placeholder="Minimum Group Size"
                        keyboardType="numeric"
                    />

                    <Text>Maximum Group Size:</Text>
                    <TextInput
                        onChangeText={(input2) => props.textChange(input2)}
                        value={props.input2}
                        placeholder="Maximum Group Size"
                        keyboardType="numeric"
                    /> */}
          <Text>Minimum</Text>
          <Picker
            selectedValue={selectedValue1}
            style={{ height: 20, width: 100 }}
            style={styles.dropdown}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue1(itemValue)
            }
          >
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
          </Picker>
          <Text>Maximum</Text>
          <Picker
            selectedValue={selectedValue2}
            style={{ height: 20, width: 100 }}
            style={styles.dropdown}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue2(itemValue)
            }
          >
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={props.addNew}>
          <Text style={styles.addButtonText}>submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4F1F4",
  },
  body: {
    margin: 30,
  },
  statusbar: {
    backgroundColor: "rgb(192, 165, 192)",
    height: 50,
  },
  dropdown: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  size: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  addButton: {
    width: 100,
    backgroundColor: "#05445E",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    fontSize: 20,
  },
});

export default Request;
