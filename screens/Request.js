import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView, Picker } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components

const Request = () => {

    const [selectedValue, setSelectedValue] = useState("math");

    return (
        <View style={styles.container}>

            <View style={styles.balance}></View>
            <View style={styles.input}>
                <Text>Find a Group!</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Math" value="math" />
                    <Picker.Item label="Science" value="sci" />
                    <Picker.Item label="English" value="eng" />
                    <Picker.Item label="History" value="his" />
                    <Picker.Item label="Art" value="art" />
                    <Picker.Item label="Music" value="mus" />
                </Picker>
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
    balance: {
        paddingBottom: 20,
    },
    input: {
        paddingBottom: 20,
        alignItems: "center",
    },
});

export default Request;
