import React from "react";
import { TouchableOpacity, Text } from "react-native";

const ButtonComponent = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: "blue",
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
