import { TRACKER } from "@/assets/expo.icon/Assets/tracker";
import MoodForm from "@/components/MoodForm";
import TrackBox from "@/components/TrackBox";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <MoodForm />

      <View style={styles.lowerChild}>
        <ScrollView>
          {TRACKER.map((data) => (
            <TrackBox date={data.date} key={data.date} cards={data.card} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
    gap: 100,
  },

  image: {
    height: 30,
    width: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  lowerChild: {
    height: 330,
    width: "100%",
    paddingHorizontal: 15,
  },
});
