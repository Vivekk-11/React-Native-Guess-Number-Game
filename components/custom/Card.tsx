import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary800,
    padding: 16,
    marginHorizontal: 24,
    marginTop: 36,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;
