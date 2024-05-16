import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const NumberContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 12 : 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
