import { View, SafeAreaView, Platform, Image, Text } from "react-native";
import React from "react";
import Heading from "../components/Heading";
import Saly19 from "../assets/Saly-19.png";

export default function SplashScreen() {
  return (
    <SafeAreaView
      className={
        Platform.OS === "android"
          ? `pt-12 bg-[#5956E9] h-full`
          : `pt-0 bg-[#5956E9] h-full`
      }
    >
      <View className="w-[90%] pl-5 pt-3">
        <Heading text="Your choice. Your Price" />
      </View>
      <View>
        <Image source={Saly19} />
      </View>
      <View className="mt-14 items-center">
        <View className="py-5 w-[80%] bg-white rounded-md ">
          <Text className="font-bold text-[#5956E9] text-center">
            Get Started
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
