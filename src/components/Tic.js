import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TicTac = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lastClick, setLastClick] = useState("");
  const [winner, setWinner] = useState("");
  const checkWinner = (boxes) => {
    console.log("boxes", boxes);
    if (boxes[0] === boxes[1] && boxes[0] === boxes[2]) {
      console.log("Winner1", boxes[0]);
      setWinner(boxes[0]);
    } else if (boxes[3] === boxes[4] && boxes[3] === boxes[5]) {
      console.log("Winner2", boxes[3]);
      setWinner(boxes[3]);
    }
    if (boxes[0] !== "" && boxes[0] === boxes[3] && boxes[0] === boxes[6]) {
      console.log("Winner3", boxes[0]);
      setWinner(boxes[0]);
    } else if (
      boxes[1] !== "" &&
      boxes[1] === boxes[4] &&
      boxes[1] === boxes[7]
    ) {
      console.log("Winner4", boxes[1]);
      setWinner(boxes[1]);
    } else if (boxes[2] === boxes[5] && boxes[2] === boxes[8]) {
      console.log("Winner5", boxes[2]);
      setWinner(boxes[2]);
    } else if (boxes[6] === boxes[7] && boxes[6] === boxes[8]) {
      console.log("Winner6", boxes[6]);
      setWinner(boxes[6]);
    } else if (boxes[0] === boxes[4] && boxes[0] === boxes[8]) {
      console.log("Winner7", boxes[7]);
      setWinner(boxes[7]);
    } else if (boxes[2] === boxes[4] && boxes[2] === boxes[6]) {
      console.log("Winner8", boxes[6]);
      setWinner(boxes[6]);
    }
  };
  const handleClick = (i) => {
    if (boxes[i] === "") {
      let newValue = lastClick === "X" ? "O" : "X";
      boxes[i] = newValue;
      setBoxes([...boxes]);
      setLastClick(newValue);
      checkWinner(boxes);
    }
  };
  const handleRestart = () => {
    setBoxes(["", "", "", "", "", "", "", "", ""]);
    setWinner("");
    setLastClick("");
  };
  return (
    <View style={styles.container}>
      {winner && <Text style={styles.winner}>Winner: {winner}</Text>}
      {winner && (
        <TouchableOpacity style={styles.restart} onPress={handleRestart}>
          <Text style={styles.winner}> Restart</Text>
        </TouchableOpacity>
      )}

      <View style={[styles.tictac, styles.shadow]}>
        {boxes.map((box, i) => (
          <TouchableOpacity style={styles.box} onPress={() => handleClick(i)}>
            <Text style={styles.text}>{box}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TicTac;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tictac: {
    width: 310,
    height: 310,

    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    flexWrap: "wrap",
  },
  box: {
    width: 95,
    height: 95,
    backgroundColor: "pink",
    marginBottom: 2,
    marginTop: 2,
    borderRadius: 15,
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
  text: {
    fontSize: 70,
  },
  winner: {
    fontSize: 60,
    color: "green",
  },
  restart: {
    fontSize: 50,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
  },
});
