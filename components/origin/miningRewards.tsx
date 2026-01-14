import React from "react";
import { Pressable, Text, View } from "react-native";
import MyAvatar from "./avatar";

export default function MiningRewards() {
  return (
    <View className="w-full">
      <Text className="text-[18px] text-[#fff] font-semibold">挖矿奖励</Text>
      <View className="mt-[12px] border-[#25262A] border-[1px] border-dashed p-[12px] rounded-[8px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[13px] text-[#868789]">未精炼 DODO</Text>
          <View className="flex flex-row items-center gap-[4px]">
            <MyAvatar src={"/images/test.png"} className="w-[16px] h-[16px]" />
            <Text className="text-[#fff]">1,560,253</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between mt-[12px]">
          <Text className="text-[13px] text-[#868789]">精炼 DODO</Text>
          <View className="flex flex-row items-center gap-[4px]">
            <MyAvatar src={"/images/test.png"} className="w-[16px] h-[16px]" />
            <Text className="text-[#fff]">0.029411</Text>
          </View>
        </View>
        <Pressable className="h-[44px] mt-[16px] border-[1px] border-[#FD7438] rounded-full items-center justify-center">
          <Text className="text-[15px] text-[#FD7438]">领取</Text>
        </Pressable>
      </View>
    </View>
  );
}
