import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Box = () => {
  return (
    <View style={styles.board}>
      <Text>Box</Text>
      <Text>row</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  board: {
    backgroundColor: "orange",
    width: 100,
    height: 100,
    marginBottom: 5,
    justifyContent: "center",
  },
  row: {
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});
