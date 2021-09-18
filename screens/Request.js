import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components

class Request extends React.Component {


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
                    <Text>Your Groups:</Text>
                </View>
            </View>
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

export default Request;
