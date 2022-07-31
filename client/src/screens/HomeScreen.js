import { View, SafeAreaView, Platform, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { MenuAlt1Icon } from "react-native-heroicons/outline";

import React, { useEffect } from "react";
import SearchField from "../components/SearchField";
import HomeOption from "../components/HomeOption";
import ItemCard from "../components/ItemCard";
import watch3 from "../assets/watch_3.png";
import iphone1 from "../assets/iphone_1.png";
import tablet1 from "../assets/tablet_1.png";

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
      <View className="pt-10 pl-8">
        <Text className="text-4xl text-black font-bold w-[70%]">
          Buy your flex. Live your life.
        </Text>
        <View>
          <View className="mt-8 flex-row items-center">
            <HomeOption text="Wearable" isActive={true} />
            <HomeOption text="Laptops" />
            <HomeOption text="Phones" />
            <HomeOption text="Drones" />
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className="mt-12 space-x-10"
          >
            <View>
              <ItemCard
                img={watch3}
                name="Apple Watch"
                price={359}
                shortDesc="Series 6 .Red"
              />
            </View>
            <View>
              <ItemCard
                img={iphone1}
                name="Apple Iphone"
                price={879}
                shortDesc="Iphone 11"
              />
            </View>
            <View>
              <ItemCard
                img={tablet1}
                name="Apple Macbook"
                price={1299}
                shortDesc="Macbook Pro"
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
