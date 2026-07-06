import { ChevronRight } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";
import { HeaderText } from "./HeaderText";
type Props = {
  time: string;
  mood: string;
  note: string;
};

const TrackCard = ({ time, mood, note }: Props) => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.imgCont}>
        <Image
          source={require("@/assets/emoji/happy.png")}
          style={styles.img}
        />
      </View>
      <View>
        <Text style={styles.txt}>{time}</Text>
        <HeaderText>{mood} </HeaderText>
        <Text style={styles.txt}>{note} </Text>
      </View>
      <View style={styles.goBtn}>
        <ChevronRight />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#FEFEFE",
    width: "100%",
    height: 80,
    elevation: 2,
    padding: 8,
    borderRadius: 6,
  },
  goBtn: {
    justifyContent: "center",
    marginLeft: "auto",
  },
  txt: {
    fontWeight: "400",
    color: "gray",
  },
  imgCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 40,
    height: 40,
    backgroundColor: "green",
    borderRadius: 100,
  },
});

export default TrackCard;
