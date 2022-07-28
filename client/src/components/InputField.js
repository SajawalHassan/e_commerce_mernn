import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";

export default function InputField({
  text,
  Icon,
  type,
  secureTextEntry,
  action,
  setAction,
}) {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    secureTextEntry ? setShowPassword(true) : setShowPassword(false);
  }, []);

  return (
    <View className="w-full mt-6">
      <View className="flex-row items-center space-x-2 mb-1">
        <Icon className="h-6 text-gray-300" />
        <Text className="text-gray-400 font-bold">{text}</Text>
      </View>
      {secureTextEntry ? (
        <View className="flex-row items-center justify-between border-b-2 border-b-gray-400">
          <TextInput
            keyboardType={type}
            placeholder={text}
            value={action}
            onChangeText={(text) => setAction(text)}
            secureTextEntry={showPassword ? true : false}
            className="flex-1"
          />
          <Text
            className="text-[#5956E9] text-sm"
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Show" : "Hide"}
          </Text>
        </View>
      ) : (
        <TextInput
          keyboardType={type}
          placeholder={text}
          value={action}
          onChangeText={(text) => setAction(text)}
          secureTextEntry={secureTextEntry ? true : false}
          className="border-b-2 border-b-gray-400"
        />
      )}
    </View>
  );
}
