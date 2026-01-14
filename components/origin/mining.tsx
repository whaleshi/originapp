import React from "react";
import { View, Text } from "react-native";
import MyAvatar from "./avatar";
import { BottomTokenIcon } from "./icons";
import MiningTrade from "./miningTrade";
import MiningRewards from "./miningRewards";
import MiningAbout from "./miningAbout";
import { MiningList } from "./miningList";

export default function Mining() {
  return (
    <View className="w-full max-w-[600px]">
      <View className="mt-[20px] flex flex-row items-center rounded-[12px] p-[12px] border-[1px] border-[#25262A]">
        <MyAvatar src={"/images/test.png"} className="w-[48px] h-[48px]" />
        <View className="h-[48px] flex flex-col justify-between ml-[8px]">
          <Text className="text-[17px] text-[#fff] font-semibold">launchcoin</Text>
          <Text className="text-[13px] text-[#8D8B90]">Launchcoin</Text>
        </View>
        <View className="h-[48px] flex flex-col justify-between items-end ml-auto">
          <Text className="text-[17px] text-[#fff] font-semibold">$0.0743</Text>
          <Text className="text-[13px] text-[#4A4B4E]">
            24H <Text className="text-[#17C964]">14.39%</Text>
          </Text>
        </View>
        <BottomTokenIcon className="ml-[12px]" />
      </View>
      <View className="my-[12px]">
        <MiningAbout />
      </View>
      <MiningTrade />
      <View className="mt-[24px]">
        <MiningRewards />
      </View>
      <MiningList />
    </View>
  );
}
