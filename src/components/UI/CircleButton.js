import { View, Text, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function ({ title, onPress, radius, textStyle }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={{ height: radius, width: radius }}>
        {({ pressed }) => (
          <LinearGradient
            colors={ ["#053225", "#7EC270"]}
            start={pressed ? [-0.1, 1] : [-0.2, 1]}
            end={[1.2, 1]}
            style={styles.gradient}
          >
            <Text style={[textStyle, styles.text]}>{title}</Text>
          </LinearGradient>
        )}
      </Pressable>
    </View>
  )
}

const styles = {
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    borderRadius: 100
  },
  gradient: {
    borderRadius: 100,
    flex: 1,
    padding: 10,
    justifyContent: "center"
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    textTransform: "uppercase"
  }
}
