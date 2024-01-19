import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.app}>
      <Text>TEST123123</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    justifyContent: "center",
    flex: 1,
  },
});
