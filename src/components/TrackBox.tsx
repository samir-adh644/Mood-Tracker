import { StyleSheet, View } from "react-native";
import { HeaderText } from "./HeaderText";
import TrackCard from "./TrackCard";

type CardItem = {
  time: string;
  mood: string;
  note: string;
};
type Props = {
  date: string;
  cards: CardItem[];
};

const TrackBox = ({ date, cards }: Props) => {
  return (
    <View style={styles.mainCont}>
      <HeaderText>{date}</HeaderText>

      {cards.map((card) => (
        <View>
          <TrackCard
            time={card.time}
            key={card.time}
            mood={card.mood}
            note={card.note}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    gap: 5,
  },
});

export default TrackBox;
