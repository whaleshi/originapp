import React from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import MyAvatar from "./avatar";
import { ItemIcon } from "./icons";

export default function TokenItem({ type, bg }: { type: number; bg?: string }) {
  const router = useRouter();

  return (
    <Pressable
      className="w-full h-[64px] rounded-[8px] p-[12px] flex flex-row items-center"
      style={{ backgroundColor: bg || "#191B1F" }}
      onPress={() => router.push("/token/1")}
    >
      <View
        className={`w-[46px] h-[46px] border-[1.5px] rounded-full flex items-center justify-center relative ${
          type === 3 ? "border-[#FD7438]" : "border-transparent"
        }`}
      >
        <MyAvatar src={"/images/test.png"} className="w-[40px] h-[40px]" />
        {type === 3 ? <ItemIcon className="absolute -bottom-[1px] -right-[1px]" /> : null}
      </View>
      <View className="flex flex-col justify-between ml-[8px]">
        <Text className="text-[14px] text-[#fff]">launchcoin</Text>
        {type === 1 ? (
          <Text className="text-[12px] text-[#868789]">Launchcoin</Text>
        ) : (
          <Text className="text-[12px] text-[#4A4B4E]">
            Price <Text className="text-[#868789]">$0.0743</Text>
          </Text>
        )}
      </View>
      <View className="ml-auto">
        {type === 1 ? (
          <View className="w-[70px] h-[32px] rounded-[8px] border-[1px] border-[#303135] items-center justify-center">
            <Text className="text-[14px] text-[#fff]">10%</Text>
          </View>
        ) : (
          <View className="flex flex-col items-end">
            <Text className="text-[14px] text-[#fff]">$0.0743</Text>
            <Text className="text-[12px] text-[#4A4B4E]">
              24H <Text className="text-[#17C964]">14.39%</Text>
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}
