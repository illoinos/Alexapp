import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Myself = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fritz}>My hobbies</Text>
      <Text style={styles.word}>
        My name is Alex. I like playing basketball in the summer with my friends
        and cousins. My favourite things to eat are japanese ramen, pizza, and
        sour candies. I live with my family that includes my father mother and
        my little brother.
      </Text>
      <Text style={styles.text}>
        What kind of application i want to create is a banking service or an
        online shopping website.
      </Text>
    </View>
  );
};

export default Myself;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
  },
  word: {
    fontSize: 17,
    color: "red",
  },
  fritz: {
    fontSize: 35,
    Color: "cyan",
  },
});
