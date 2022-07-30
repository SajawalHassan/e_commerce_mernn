import { View, SafeAreaView, Platform, Text } from "react-native";
import { useSelector } from "react-redux";
import { MenuAlt1Icon } from "react-native-heroicons/outline";

import React, { useEffect } from "react";
import SearchField from "../components/SearchField";

export default function HomeScreen({ navigation }) {
  const { accessToken } = useSelector((state) => state.login);

  useEffect(() => {
    accessToken === "" ? navigation.navigate("Login") : null;
  }, []);

  return (
    <SafeAreaView
      className={
        Platform.OS === "android"
          ? `pt-12 bg-[#F2F2F2] h-full`
          : `pt-0 bg-[#F2F2F2] h-full`
      }
    >
      <View className="flex-row p-4 w-full items-center justify-center border-b-[3px] border-[#CFCFCF]">
        <MenuAlt1Icon size={25} color="black" style={{ marginRight: 20 }} />
        <SearchField />
      </View>
    </SafeAreaView>
  );
}
