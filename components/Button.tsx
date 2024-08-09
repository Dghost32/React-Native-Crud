import { StyleSheet, Pressable, PressableProps } from "react-native";
import React, { FC } from "react";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ButtonProps = PressableProps & {
  text?: string;
};

const Button: FC<ButtonProps> = ({ text = "Click me!", ...PressableProps }) => {
  const color = useThemeColor({}, "text");
  const background = useThemeColor({}, "background");

  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.button,
        {
          backgroundColor: color,
        },
      ]}
      onPress={PressableProps.onPress}
    >
      <ThemedText
        type="default"
        style={{ ...styles.buttonText, color: background }}
      >
        {text}
      </ThemedText>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
});
