import { StyleSheet, Text, View, ImageBackground } from "react-native"

import CircleButton from "./UI/CircleButton"

export default function GetStarted({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.mainButtonWrapper}>
        <CircleButton
          title="Get Started"
          onPress={() => navigation.navigate("Form")}
          radius={126}
          textStyle={{ fontSize: 17, lineHeight: 23, letterSpacing: 0.5 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "100%",
    alignItems: "flex-end"
  },
  mainButtonWrapper: {
    height: 150,
    paddingTop: 12,
    paddingLeft: 12,
    width: "55%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    marginVertical: 30,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100
  }
})
