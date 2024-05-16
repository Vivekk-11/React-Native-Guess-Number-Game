import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
