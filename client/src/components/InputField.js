import { View, Text, TextInput } from "react-native";
import React from "react";

export default function InputField({
  text,
  Icon,
  type,
  secureTextEntry,
  action,
  setAction,
}) {
  return (
    <View className="w-full mt-6">
      <View className="flex-row items-center space-x-2 mb-1">
        <Icon className="h-6 text-gray-300" />
        <Text className="text-gray-400 font-bold">{text}</Text>
      </View>
      <TextInput
        keyboardType={type}
        placeholder={text}
        value={action}
        onChangeText={(text) => setAction(text)}
        secureTextEntry={secureTextEntry ? true : false}
        className="border-b-2 border-b-gray-400"
      />
    </View>
  );
}
