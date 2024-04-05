import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { howItWorks, faq, privacy, terms }  from "../data/data";


import Button from "./UI/Button";

export default function ButtonsGrid({ navigation }) {
  return (
    <View style={styles.buttonWrapper}>
      <View style={[styles.row, styles.firstRow]}>
        <Button
          title="How it works"
          icon={<FontAwesome5 name="question-circle" size={22} color="white" />}
          onPress={() => navigation.navigate("InfoPage", { title: 'How it works', content: howItWorks })}
        />
        <Button
          title="Faq"
          icon={<Ionicons name="chatbubble-ellipses-sharp" size={22} color="white" />}
          onPress={() => navigation.navigate("InfoPage", { title: 'Faq', content: faq})}
        />
      </View>
      <View style={styles.row}>
        <Button
          title="Privacy Policy"
          icon={<MaterialCommunityIcons name="shield-lock-outline" size={22} color="white" />}
          onPress={() => navigation.navigate("InfoPage", { title: 'Privacy', content: privacy})}
        />
        <Button
          title="Terms"
          icon={<Feather name="file-text" size={22} color="white" />}
          onPress={() => navigation.navigate("InfoPage", { title: 'Terms', content: terms})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 5,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "start",
  },
  row: {
    flexDirection: "row",
    gap: 25,
  },
  firstRow: {
    marginBottom: 25,
    marginTop: 75,
  },
});
