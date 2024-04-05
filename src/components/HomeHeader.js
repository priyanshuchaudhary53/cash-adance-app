import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Borrow Money</Text>
      <Text style={styles.subHeading}>in 3 easy steps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: 20,
  },
  heading: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeading: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "300",
  },
});
