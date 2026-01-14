import React from "react";
import { View, Text } from "react-native";
import { BNBIcon } from "./icons";

const rows = [
  { id: 1, user: "0x1234...1234", amount: "0.23", reward: "240" },
  { id: 2, user: "0x5678...5678", amount: "0.12", reward: "120" },
  { id: 3, user: "0x9999...9999", amount: "0.08", reward: "88" },
];

export const MiningList = () => {
  return (
    <View className="w-full mt-[24px]">
      <Text className="text-[18px] text-[#fff] font-semibold mb-[8px]">挖矿榜单</Text>
      <View className="border-[1px] border-[#25262A] rounded-[8px] overflow-hidden">
        <View className="flex flex-row h-[38px] items-center text-[12px] text-[#868789] px-[12px] border-b border-[#25262A]">
          <Text className="w-[120px]">地址</Text>
          <Text className="flex-1 text-right">BNB</Text>
          <Text className="w-[80px] text-right">奖励</Text>
        </View>
        {rows.map((row) => (
          <View key={row.id} className="flex flex-row h-[38px] items-center px-[12px]">
            <Text className="w-[120px] text-[#fff] text-[12px]">{row.user}</Text>
            <View className="flex-1 flex flex-row items-center justify-end gap-[4px]">
              <BNBIcon className="w-[14px] h-[14px]" />
              <Text className="text-[#fff] text-[12px]">{row.amount}</Text>
            </View>
            <Text className="w-[80px] text-right text-[#fff] text-[12px]">{row.reward}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
