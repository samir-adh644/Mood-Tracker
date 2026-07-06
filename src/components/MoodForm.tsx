import { EMOJIS } from "@/assets/expo.icon/Assets/emoji";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Emoji from "./Emoji";
import { HeaderText } from "./HeaderText";
import TextArea from "./TextArea";

// type SavedMood = {
//   emoji: number;
//   text: string;
//   date: string;
// };

type CardItem = {
  id: number;
  time: string;
  mood: number;
  note: string;
};

type SavedMood = {
  date: string;
  cards: CardItem[];
};

const MoodForm = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<number>();
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.upperChild}>
        <HeaderText>How are you feeling today?</HeaderText>
        <View style={styles.emojiBox}>
          {EMOJIS.map((emoji) => (
            <Emoji
              onPress={() => {
                setSelectedEmoji(emoji.id);
              }}
              text={emoji.name}
              key={emoji.id}
              source={emoji.image}
              isSelected={selectedEmoji === emoji.id}
            />
          ))}
        </View>
        <View style={styles.notesPart}>
          <HeaderText>Notes</HeaderText>
          <TextArea
            value={text}
            onChangeText={(text) => {
              setText(text);
            }}
          />
          <Button
            title="Save Mood"
            onPress={async () => {
              if (!selectedEmoji) return;

              const existing = await AsyncStorage.getItem("moods");

              let data: SavedMood[] = [];

              if (existing) {
                data = JSON.parse(existing);
              }

              // data.push({
              //   date: new Date().toISOString(),
              //   emoji: selectedEmoji,
              //   text: text,
              // });

              await AsyncStorage.clear();

              const todayLabel = new Date().toLocaleString("en-US", {
                day: "numeric",
                month: "long",
              });
              const currentTime = new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              });

              let existingDayGroup = data.find(
                (item) => item.date === todayLabel,
              );

              const newCardItem = {
                id: Date.now(),
                time: currentTime,
                mood: selectedEmoji,
                note: text,
              };

              if (existingDayGroup) {
                existingDayGroup.cards.push(newCardItem);
              } else {
                data.push({
                  date: todayLabel,
                  cards: [newCardItem],
                });
              }

              await AsyncStorage.setItem("moods", JSON.stringify(data));

              console.log(await AsyncStorage.getItem("moods"));
              setSelectedEmoji(undefined);
              setText("");
            }}
          />
        </View>
      </View>
    </View>
  );
};

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
    height: 300,
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

  notesPart: {
    gap: 10,
    flex: 1,
    width: "100%",
  },
});

export default MoodForm;
