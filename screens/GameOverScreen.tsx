import PrimaryButton from "@/components/custom/PrimaryButton";
import Title from "@/components/custom/Title";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";

interface Props {
  roundsNumber: number;
  userNumber: string;
  onStartNewGame: () => void;
}

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: Props) => {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 20,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
