import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: object;
}

const InstructionText = ({ children, style }: Props) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
  },
});

export default InstructionText;
