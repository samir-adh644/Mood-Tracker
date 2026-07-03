import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from "react-native";

type Props = {
  text: string;
  source: ImageSourcePropType;
};

export default function Emoji({ text, source }: Props) {
  return (
    <View style={styles.emojiCard}>
      <Image style={styles.image} source={source} />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  image: {
    height: 40,
    width: 40,
  },
});
