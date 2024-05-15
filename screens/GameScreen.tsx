import Card from "@/components/custom/Card";
import InstructionText from "@/components/custom/InstructionText";
import PrimaryButton from "@/components/custom/PrimaryButton";
import Title from "@/components/custom/Title";
import NumberContainer from "@/components/game/NumberContainer";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

interface Props {
  userNumber: string;
  gameOverHandler: () => void;
}

const GameScreen = ({ userNumber, gameOverHandler }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, parseInt(userNumber));
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (initialGuess === parseInt(userNumber)) {
      gameOverHandler();
    }
  }, [initialGuess, userNumber, gameOverHandler]);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < parseInt(userNumber)) ||
      (direction === "greater" && currentGuess > parseInt(userNumber))
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong.", [
        { text: "Sorry!", style: "cancel" },
      ]);

      return;
    }
    if (direction === "lower") maxBoundary = currentGuess;
    else minBoundary = currentGuess - 1;
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess!</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "greater")}>
              +
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
              -
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>Log Rounds!</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
});

export default GameScreen;
