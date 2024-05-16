import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primary800,
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
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
