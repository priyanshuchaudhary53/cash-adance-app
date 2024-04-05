import { Pressable, View, Text } from "react-native";

export default function Button({ title, onPress, icon }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#2b4ab5" : "#2f51ca",
          },
          styles.wrapper,
        ]}
      >
        {icon && icon}
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 14,
    borderRadius: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
};
