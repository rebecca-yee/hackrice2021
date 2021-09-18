import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}></View>
      {props.children}
      {/* grabs whatever is nested in between Card component and displays them as children here */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#FFF",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    paddingHorizontal: 110,
    paddingVertical: 30,
  },
  cardContent: {
    // marginHorizontal: 18,
    // marginVertical: 10,
  },
});
