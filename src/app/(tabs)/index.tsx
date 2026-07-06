import MoodForm from "@/components/MoodForm";
import SavedMoods from "@/components/SavedMoods";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <MoodForm />

      <SavedMoods />
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
});
