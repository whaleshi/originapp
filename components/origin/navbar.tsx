import React from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { LogoIcon, TextIcon } from "./icons";

export const Navbar = () => {
  const router = useRouter();

  return (
    <View className="w-full bg-[#0D0F13] border-b-[1px] border-[#25262A]">
      <View className="flex flex-row items-center h-[56px] px-[14px] gap-[8px]">
        <Pressable className="flex flex-row items-center gap-[6px]" onPress={() => router.push("/")}> 
          <LogoIcon />
          <TextIcon />
        </Pressable>
        <View className="flex-1" />
        <Pressable
          className="h-[32px] bg-[transparent] px-[12px] rounded-[8px] border-[1px] border-[#FD7438] items-center justify-center"
          onPress={() => router.push("/create")}
        >
          <Text className="text-[13px] text-[#FD7438]">创建代币</Text>
        </Pressable>
        <Pressable className="h-[32px] bg-[#FFF] px-[12px] rounded-[8px] items-center justify-center ml-[8px]">
          <Text className="text-[13px] text-[#0D0F13]">连接钱包</Text>
        </Pressable>
      </View>
    </View>
  );
};
