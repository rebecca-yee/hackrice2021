import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ListItem({ title, subtitle }) {
  return (
    <View>
      <Text style={styles.heading}>
        {title}: {subtitle}
      </Text>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  heading: {
    color: "#05445E",
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Avenir",
    fontSize: 20,
  },
  subheading: {
    color: "black",
    marginBottom: 10,
    fontFamily: "Avenir",
    fontSize: 20,
  },
});
