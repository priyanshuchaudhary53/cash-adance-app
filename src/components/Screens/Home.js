import { StyleSheet, View, ImageBackground } from "react-native"
import HomeHeader from "../HomeHeader"
import HomeFooter from "../HomeFooter"
import ButtonsGrid from "../ButtonsGrid"
import GetStarted from "../GetStarted"

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/home-bg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <HomeHeader />
        <ButtonsGrid navigation={navigation} />
        <GetStarted navigation={navigation} />
        <HomeFooter />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
