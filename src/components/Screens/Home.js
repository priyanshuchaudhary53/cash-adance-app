import { StyleSheet, View, ImageBackground } from "react-native";
import HomeHeader from "../HomeHeader";
import HomeFooter from "../HomeFooter";
import ButtonsGrid from "../ButtonsGrid";
import GetStarted from "../GetStarted";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#053225", "#F49F0A"]}
        start={[1, 0.45]}
        end={[1, 1.25]}
        style={styles.gradient}
      >
        <HomeHeader />
        <ButtonsGrid navigation={navigation} />
        <GetStarted navigation={navigation} />
        <HomeFooter />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
