import { View, Text, StyleSheet } from "react-native"
import { WebView } from "react-native-webview"

export default function Form() {
  const htmlContent = `
    <html>
    <style>
      html, body {
        background-color: #32075B;
      }
    </style>
    <body>
      <script src="https://cdn101.zeroparallel.com/form/run.php?p=D92C0F07CA7B4DB1BEC8E866E9A067C8"></script>
    </body>
    </html>
  `
  return (
    <View style={styles.container}>
      <WebView
        source={{ html: htmlContent, baseUrl: "https://cdn101.zeroparallel.com/form/run.php?p=D92C0F07CA7B4DB1BEC8E866E9A067C8" }}
        style={{ flex: 1 }}
        containerStyle={{ marginTop: 20}}
        setBuiltInZoomControls={false}
        scalesPageToFit={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#32075B",
    paddingHorizontal: 10,
    paddingTop: 50
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center"
  },

  subHeading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "300"
  }
})
