import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    // <View style={[styles.container, { padding: top }]}>
    //   <Text>I am the text</Text>
    //   <Image
    //     style={styles.image}
    //     source={require("@/app/assets/emoji/happy.png")}
    //   />
    // </View>

    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.upperChild}>
        <Text style={styles.headerText}>How are you feeling today?</Text>
        <View style={styles.emojiBox}>
          <View style={styles.emojiCard}>
            <Image
              style={styles.image}
              source={require("@/app/assets/emoji/happy.png")}
            />
            <Text>Happy</Text>
          </View>
          <View style={styles.emojiCard}>
            <Image
              style={styles.image}
              source={require("@/app/assets/emoji/neutral.png")}
            />
            <Text>Neutral</Text>
          </View>
          {/* <View style={styles.emojiCard}>
            <Image
              style={styles.image}
              source={require("@/app/assets/emoji/anxious.png")}
            />
          </View> */}
          <View style={styles.emojiCard}>
            <Image
              style={styles.image}
              source={require("@/app/assets/emoji/sad.png")}
            />
            <Text>Sad</Text>
          </View>
          <View style={styles.emojiCard}>
            <Image
              style={styles.image}
              source={require("@/app/assets/emoji/angry.png")}
            />
            <Text>Angry</Text>
          </View>
        </View>
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },

  image: {
    height: 50,
    width: 50,
  },
  upperChild: {
    height: 400,
    width: "100%",
    paddingHorizontal: 15,
  },
  emojiBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 120,
    marginTop: 10,
  },
  emojiCard: {
    flex: 1,
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    height: 100,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 4,
    borderRadius: 8,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2",
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
