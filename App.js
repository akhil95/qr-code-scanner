import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QrScanner from "./components/QrScanner";

export default function App() {
  return (
    <View style={styles.container}>
      <QrScanner />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
