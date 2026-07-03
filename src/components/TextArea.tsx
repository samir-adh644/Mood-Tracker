import React from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = React.ComponentProps<typeof TextInput>;

export default function TextArea({ style, ...props }: Props) {
  return (
    <TextInput
      numberOfLines={5}
      textAlign="left"
      textAlignVertical="top"
      style={[styles.root, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  root: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    minHeight: 100,
  },
});
