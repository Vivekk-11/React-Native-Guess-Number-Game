import React from "react";
import { Text, View } from "react-native";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
