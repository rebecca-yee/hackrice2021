import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ListItem({ title, subtitle }) {
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.subheading}>{subtitle}</Text>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  heading: {
    color: "black",
  },
  subheading: {
    color: "gray",
  },
});
