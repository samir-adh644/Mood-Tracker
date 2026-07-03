import Emoji from "@/components/Emoji";
import { HeaderText } from "@/components/HeaderText";
import TextArea from "@/components/TextArea";
import { Button, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EMOJIS } from "./assets/data/emoji";

export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.upperChild}>
        <HeaderText>How are you feeling today?</HeaderText>
        <View style={styles.emojiBox}>
          {EMOJIS.map((emoji) => (
            <Emoji text={emoji.name} key={emoji.name} source={emoji.image} />
          ))}
        </View>
        <View style={styles.notesPart}>
          <HeaderText>Notes</HeaderText>
          <TextArea />
          <Button title="Save" />
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
    height: 30,
    width: 30,
  },
  upperChild: {
    height: 400,
    width: "100%",
    paddingHorizontal: 15,
  },
  emojiBox: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 120,
    marginTop: 10,
    flexWrap: "wrap",
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
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  notesPart: {
    gap: 10,
  },
});
