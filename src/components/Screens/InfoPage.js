import { View, Text, StyleSheet, SectionList } from "react-native"

export default function InfoPage({ route }) {
  const {  content  } = route.params;

  return (
    <View style={styles.container}>
      <SectionList
        sections={content}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.paragraphWrapper}>
            <Text style={styles.paragraph}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
            section.heading && <Text style={styles.heading}>{section.heading}</Text>
        )}
        style={styles.list}
        stickySectionHeadersEnabled={false}
        ListFooterComponent={<View style={{ marginBottom: 50 }} />}
        ListHeaderComponent={<View style={{ marginTop: 20 }} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#32075B"
  },
  list: {
    paddingHorizontal: 25
  },
  heading: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 10,
    color: "#fff"
  },
  paragraphWrapper: {
    marginBottom: 10
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "300",
    color: "#fff"
  }
})
