import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeHeader() {
  return (
    <View style={styles.footer}>
      <View style={styles.innerWrapper}>
        <MaterialCommunityIcons name="shield-lock" size={18} style={styles.icon} />
        <Text style={styles.footerText}>
          Your personal information is protected
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: "center",
  },
  innerWrapper: {
    width: 160,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "start",
  },
  icon: {
    marginTop: 2,
    color: "white",
    opacity: 0.8,
  },
  footerText: {
    color: "white",
    textAlign: "center",
    fontSize: 13,
    lineHeight: 18,
    opacity: 0.8
  },
});
