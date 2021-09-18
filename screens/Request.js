import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView, Picker, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components

const Request = () => {

    const [selectedValue, setSelectedValue] = useState("math");
    const [number1, onChangeNumber1] = useState(null);
    const [number2, onChangeNumber2] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.dropdown}>
                <Text>Find a Group!</Text>
                <Text>Class:</Text>
                <View style={styles.input}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Math" value="math" />
                        <Picker.Item label="Science" value="sci" />
                        <Picker.Item label="English" value="eng" />
                        <Picker.Item label="History" value="his" />
                        <Picker.Item label="Art" value="art" />
                        <Picker.Item label="Music" value="mus" />
                    </Picker>
                </View>

                <View>
                    <Text>Minimum Group Size:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber1}
                        value={number1}
                        placeholder="Minimum Group Size"
                        keyboardType="numeric"
                    />

                    <Text>Maximum Group Size:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber2}
                        value={number2}
                        placeholder="Maximum Group Size"
                        keyboardType="numeric"
                    />
                </View>
            </View>
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
    dropdown: {
        paddingBottom: 10,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
    },
});

export default Request;
