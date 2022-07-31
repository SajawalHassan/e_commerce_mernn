import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function ItemCard({ img, name, shortDesc, price }) {
  return (
    <TouchableOpacity className="bg-white px-10 py-4 rounded-lg border-b-4 border-r-4 border-t-[1px] border-l-[1px] border-gray-300 items-center relative">
      <View className="h-[150px]">
        <Image source={img} />
      </View>
      <View className="mt-2">
        <Text className="text-center text-xl font-semibold">{name}</Text>
        <Text className="text-center text-[#868686] my-2">{shortDesc}</Text>
        <Text className="text-center text-[16px] font-bold text-[#5956E9]">
          ${price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
