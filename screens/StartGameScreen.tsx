import Card from "@/components/custom/Card";
import InstructionText from "@/components/custom/InstructionText";
import PrimaryButton from "@/components/custom/PrimaryButton";
import Title from "@/components/custom/Title";
import { Colors } from "@/constants/Colors";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  onPickNumber: (number: string) => void;
}

const StartGameScreen = ({ onPickNumber }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberHandler = (number: string) => {
    setEnteredNumber(number);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    console.log("Chosen number:", chosenNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number should be between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    onPickNumber(enteredNumber);
  };

  const resetHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.screen}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={numberHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
