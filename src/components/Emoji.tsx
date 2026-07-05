import { ComponentProps } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";

type Props = {
  text: string;
  source: ImageSourcePropType;
  isSelected: boolean;
} & ComponentProps<typeof Pressable>;

export default function Emoji({ text, source, isSelected, ...rest }: Props) {
  return (
    <Pressable
      style={[
        styles.emojiCard,
        {
          borderColor: isSelected ? "#5546df" : "#ffffff",
        },
      ]}
      {...rest}
    >
      <Image style={styles.image} source={source} />
      <Text style={styles.cardText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  emojiCard: {
    flex: 1,
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    height: 100,
    marginHorizontal: 4,
    borderRadius: 8,
    borderWidth: 2,
    // elevation: 5,
  },
  image: {
    height: 40,
    width: 40,
  },
  cardText: {
    fontFamily: "SpaceGrotesk_300Light",
  },
});
