import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View>{props.children}</View>
      {/* <Text style={styles.cardContent}>Press me to chat with your group!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  cardContent: {
    fontSize: 15,
    fontFamily: "Avenir",
    fontWeight: "bold",
  },
});
