import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  btnTxt: string;
} & ComponentProps<typeof Pressable>;
export default function MyButton({ btnTxt }: Props) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{btnTxt}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    backgroundColor: "#5848E1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "SpaceGrotesk_400Regular",
  },
});
