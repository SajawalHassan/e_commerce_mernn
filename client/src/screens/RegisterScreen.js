import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Ellipse19 from "../assets/Ellipse-19.png";
import Ellipse21 from "../assets/Ellipse-21.png";
import InputField from "../components/InputField";
import ButtonLarge from "../components/ButtonLarge";

import {
  UserIcon,
  AtSymbolIcon,
  LockClosedIcon,
} from "react-native-heroicons/outline";
import { View, Text, SafeAreaView, Platform, Image } from "react-native";
import SmallText from "../components/SmallText";
import { StatusBar } from "expo-status-bar";
import { registerFail, setIsLoading } from "../features/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isLoading } = useSelector((state) => state.register);
  useEffect(() => {
    dispatch(registerFail(""));
  }, []);

  const dispatch = useDispatch();

  const handleOnPress = async () => {
    dispatch(setIsLoading(true));
    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
      });

      navigation.navigate("LoginScreen");
    } catch (error) {
      dispatch(registerFail(error.response.data));
    }
  };

  return (
    <SafeAreaView
      className={
        Platform.OS === "android"
          ? `pt-12 bg-[#5956E9] h-full items-center`
          : `pt-0 bg-[#5956E9] h-full items-center`
      }
    >
      <Image source={Ellipse19} className="absolute right-0" />
      <Image source={Ellipse21} className="absolute left-24 top-14" />
      <Image source={Ellipse21} className="absolute right-10 top-[250px]" />
      <View className="pt-16">
        <Heading text="Create an account" />
      </View>
      <View className="mt-16 bg-white w-full rounded-t-[20px] h-full p-5">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-lg">Register</Text>
        </View>
        <View className="items-center justify-center h-[43%] w-full">
          <View className="w-[80%]">
            <InputField
              type="default"
              text="Username"
              Icon={UserIcon}
              action={username}
              setAction={setUsername}
            />
            <InputField
              type="default"
              text="Email"
              Icon={AtSymbolIcon}
              action={email}
              setAction={setEmail}
            />
            <InputField
              type="default"
              text="Password"
              Icon={LockClosedIcon}
              secureTextEntry={true}
              action={password}
              setAction={setPassword}
            />
          </View>
        </View>
        <View className="items-center">
          <Text className="text-red-500 font-bold mb-2">{error}</Text>

          <ButtonLarge text="Register" onPress={() => handleOnPress()} />
          <View className="mt-2">
            <SmallText
              text="Already have an account?"
              onPress={() => navigation.navigate("LoginScreen")}
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
