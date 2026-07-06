import { TRACKER } from "@/assets/expo.icon/Assets/tracker";
import { ScrollView, StyleSheet, View } from "react-native";
import TrackBox from "./TrackBox";

const SavedMoods = () => {
  return (
    <View style={styles.lowerChild}>
      <ScrollView>
        {TRACKER.map((data) => (
          <TrackBox date={data.date} key={data.date} cards={data.card} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  lowerChild: {
    height: 330,
    width: "100%",
    paddingHorizontal: 15,
  },
});

export default SavedMoods;
