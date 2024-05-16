import Title from "@/components/custom/Title";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GameOverScreen = () => {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 400,
    height: 400,
    borderRadius: 200,
    borderWidth: 3,
  },
  image: {
    overflow: "hidden",
  },
});

export default GameOverScreen;
