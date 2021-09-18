import React from "react";
import { View, Text } from "react-native";

function ListItem({ title, subtitle }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
}

export default ListItem;
