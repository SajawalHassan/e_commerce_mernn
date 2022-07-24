import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonLarge({ text, onPress }) {
  return (
    <TouchableOpacity
      className="py-5 w-[80%] bg-[#5956E9] rounded-md"
      onPress={() => onPress()}
    >
      <Text className="font-bold text-white text-center">{text}</Text>
    </TouchableOpacity>
  );
}
