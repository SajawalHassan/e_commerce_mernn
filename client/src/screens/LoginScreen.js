import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Ellipse19 from "../assets/Ellipse-19.png";
import Ellipse21 from "../assets/Ellipse-21.png";
import InputField from "../components/InputField";
import ButtonLarge from "../components/ButtonLarge";
import SmallText from "../components/SmallText";

import { AtSymbolIcon, LockClosedIcon } from "react-native-heroicons/outline";
import { View, Text, SafeAreaView, Platform, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api/axios";
import { loginFail, loginSuccess } from "../features/loginSlice";
import { setIsLoading } from "../features/registerSlice";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(loginFail(""));
  }, []);

  const handleOnPress = async () => {
    dispatch(setIsLoading(true));
    try {
      const { data } = await axios.post("/auth/login", { email, password });

      dispatch(loginSuccess(data.accessToken));
      console.log(data.accessToken);
    } catch (error) {
      dispatch(loginFail(error.response.data));
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
        <Heading text="welcome back" />
      </View>
      <View className="mt-16 bg-white w-full rounded-t-[20px] h-full p-5">
        <Text className="font-bold text-lg">Login</Text>
        <View className="items-center justify-center h-[43%] w-full">
          <View className="w-[80%]">
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
        <View className="items-center mt-5">
          <Text className="text-red-500 font-bold mb-2">{error}</Text>

          <ButtonLarge text="Login" onPress={() => handleOnPress()} />
          <View className="mt-2">
            <SmallText
              text="Don't have an account?"
              onPress={() => handleOnPress()}
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
