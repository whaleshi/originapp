import React from "react";
import { View, Text } from "react-native";
import { BNBIcon } from "./icons";

const rows = [
  { side: "buy", amount: "0.12", token: "2450", time: "2024-01-12 12:30" },
  { side: "sell", amount: "0.08", token: "1800", time: "2024-01-12 12:18" },
  { side: "buy", amount: "0.31", token: "5600", time: "2024-01-12 11:52" },
];

export const SwapList = () => {
  return (
    <View className="w-full">
      <Text className="text-[20px] text-[#fff] mb-[8px]">交易记录</Text>
      <View className="w-full mb-[30px]">
        <View className="min-w-[424px]">
          <View className="flex flex-row border-b border-dashed border-[#25262A] h-[38px] items-center text-[12px] text-[#868789] px-[12px]">
            <Text className="w-[60px] text-left">类型</Text>
            <Text className="w-[100px] text-right">BNB</Text>
            <Text className="w-[100px] text-right">数量</Text>
            <Text className="w-[120px] text-right">时间</Text>
          </View>
          {rows.map((row, index) => (
            <View
              key={index}
              className="flex flex-row min-h-[38px] items-center text-[12px] px-[12px] rounded-[8px] py-[2px]"
            >
              <Text className={`w-[60px] text-left ${row.side === "sell" ? "text-[#FF5160]" : "text-[#2ED075]"}`}>
                {row.side === "sell" ? "卖出" : "买入"}
              </Text>
              <View className="w-[100px] flex flex-row items-center justify-end gap-[4px]">
                <BNBIcon className="w-[14px] h-[14px]" />
                <Text className="text-[#fff]">{row.amount}</Text>
              </View>
              <Text className="w-[100px] text-right text-[#fff]">{row.token}</Text>
              <Text className="w-[120px] text-right text-[#fff] text-[11px]">{row.time}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
