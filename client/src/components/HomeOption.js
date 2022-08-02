import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeOption({ text, isActive = false }) {
  return (
    <TouchableOpacity>
      <Text
        className={
          isActive
            ? `text-lg text-[#5956E9] border-b-2 border-b-[#5956E9] font-[500]`
            : `text-lg text-[#9A9A9D] font-[500] ml-6`
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
