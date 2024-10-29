import { StyleSheet, Text, View } from "react-native";
import { Ball } from "../../components/Ball";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
