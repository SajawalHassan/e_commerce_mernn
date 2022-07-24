import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function SmallText({ text, onPress }) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text className="text-[#5956E9]">{text}</Text>
    </TouchableOpacity>
  );
}
