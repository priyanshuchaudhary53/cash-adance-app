import { StatusBar } from "expo-status-bar"
import * as React from "react"
import { StyleSheet } from "react-native"
import HomeScreen from "./src/components/Screens/Home"
import Form from "./src/components/Screens/Form"
import InfoPage from "./src/components/Screens/InfoPage"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Form"
          component={Form}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="InfoPage"
          component={InfoPage}
          options={({ route }) => ({
            title: route.params.title,
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#32075B" },
            headerTitleStyle: {
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold"
            },
            headerTintColor: "#fff"
          })}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  }
})
