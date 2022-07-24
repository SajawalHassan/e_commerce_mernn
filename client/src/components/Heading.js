import { View, Text } from "react-native";
import React from "react";

export default function Heading({ text }) {
  return (
    <View className="w-full">
      <Text className="text-[53px] font-bold text-white">{text}</Text>
    </View>
  );
}
