import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  const pressHandler = () => {};

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
        ]}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#72063c",
    elevation: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
