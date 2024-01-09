import { StatusBar } from "expo-status-bar"
import { Feather } from "@expo/vector-icons"
import { Pressable, StyleSheet, TextInput, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <TextInput style={styles.input} placeholder="Pesquisar..." />

        <Pressable style={styles.button}>
          <Feather name="mic" color="#FFF" size={24} />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 52,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    fontSize: 16,
    borderRadius: 12,
    backgroundColor: "#D9E6EB",
  },
  button: {
    height: 54,
    width: 54,
    borderRadius: 12,
    backgroundColor: "#6F4AE5",
    justifyContent: "center",
    alignItems: "center",
  },
})
