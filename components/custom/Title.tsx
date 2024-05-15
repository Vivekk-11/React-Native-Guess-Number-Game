import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.accent500,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: Colors.accent500,
    borderWidth: 2,
    padding: 12,
  },
});

export default Title;
