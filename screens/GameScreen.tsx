import Card from "@/components/custom/Card";
import InstructionText from "@/components/custom/InstructionText";
import PrimaryButton from "@/components/custom/PrimaryButton";
import Title from "@/components/custom/Title";
import NumberContainer from "@/components/game/NumberContainer";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "@/components/game/GuessLogItem";

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

interface Props {
  userNumber: string;
  gameOverHandler: (rounds: number) => void;
}

const GameScreen = ({ userNumber, gameOverHandler }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, parseInt(userNumber));
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === parseInt(userNumber)) {
      gameOverHandler(guessRounds.length);
    }
  }, [currentGuess, userNumber, gameOverHandler, guessRounds]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prev) => [newRandomNumber, ...prev]);
  };

  const guessRoundsList = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "greater")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
              <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <View style={styles.buttonsContainerWide}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(null, "greater")}>
            <Ionicons name="add-outline" size={24} color="white" />
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
            <Ionicons name="remove-outline" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess!</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem guess={item} roundNumber={guessRoundsList - index} />
          )}
          keyExtractor={(item) => `${item}`}
          alwaysBounceVertical={false}
        />
      </View>
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
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
