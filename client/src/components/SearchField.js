import { View, TextInput } from "react-native";
import React from "react";
import { SearchIcon } from "react-native-heroicons/outline";

export default function SearchField() {
  return (
    <View className="flex-row space-x-3 rounded-full border-2 border-[#C9C9C9] w-[80%] items-center justify-center px-2">
      <SearchIcon color="black" style={{ marginLeft: 5 }} />
      <TextInput
        placeholder="Search"
        className="flex-1 h-full py-2 rounded-full text-lg"
      />
    </View>
  );
}
