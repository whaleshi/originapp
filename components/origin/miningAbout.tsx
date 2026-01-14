import React from "react";
import { Text, View } from "react-native";
import MyAvatar from "./avatar";

export default function MiningAbout() {
  return (
    <View className="w-full rounded-[8px] overflow-hidden border-[1px] border-[#25262A]">
      <View className="h-[60px] bg-[#191B1F] flex flex-row">
        <View className="flex-1 border-r-[1px] border-[#25262A] flex flex-col items-center justify-center gap-[4px]">
          <View className="flex flex-row items-center gap-[4px]">
            <MyAvatar src={"/images/test.png"} className="w-[18px] h-[18px]" />
            <Text className="text-[16px] text-[#fff]">36000</Text>
            <Text className="text-[12px] text-[#4A4B4E]">/</Text>
            <MyAvatar src={"/images/test.png"} className="w-[18px] h-[18px]" />
            <Text className="text-[16px] text-[#fff]">6000</Text>
          </View>
          <Text className="text-[12px] text-[#4A4B4E]">母矿奖池 / 本轮发放</Text>
        </View>
        <View className="flex-1 flex flex-col items-center justify-center gap-[4px]">
          <Text className="text-[16px] text-[#fff]">05:59:59</Text>
          <Text className="text-[12px] text-[#4A4B4E]">#1</Text>
        </View>
      </View>
      <View className="p-[12px] border-t-[1px] border-[#25262A] flex flex-col gap-[8px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[12px] text-[#868789]">我的交易量 / 全局交易量</Text>
          <View className="flex flex-row items-center gap-[4px]">
            <MyAvatar src={"/images/test.png"} className="w-[12px] h-[12px]" />
            <Text className="text-[#fff]">36000</Text>
            <Text className="text-[12px] text-[#4A4B4E]">/</Text>
            <MyAvatar src={"/images/test.png"} className="w-[12px] h-[12px]" />
            <Text className="text-[#fff]">6000</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[12px] text-[#868789]">我的占比</Text>
          <Text className="text-[#fff]">5.00%</Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[12px] text-[#868789]">预计获得</Text>
          <View className="flex flex-row items-center gap-[4px]">
            <MyAvatar src={"/images/test.png"} className="w-[12px] h-[12px]" />
            <Text className="text-[#fff]">680.26</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
