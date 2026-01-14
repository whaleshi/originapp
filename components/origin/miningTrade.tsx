import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { BNBIcon, SettingIcon } from "./icons";
import MyAvatar from "./avatar";

export default function MiningTrade() {
  const [side, setSide] = useState<"buy" | "sell">("buy");

  return (
    <View className="rounded-[8px] p-[12px] bg-[#191B1F] border-[1px] border-[#25262A]">
      <View className="flex flex-row h-[36px] bg-[#25262A] rounded-[8px]">
        <Pressable
          className={`flex-1 rounded-[6px] items-center justify-center ${side === "buy" ? "bg-[rgba(253,116,56,0.15)]" : ""}`}
          onPress={() => setSide("buy")}
        >
          <Text className={`text-[13px] font-semibold ${side === "buy" ? "text-[#FD7438]" : "text-[#868789]"}`}>挖矿</Text>
        </Pressable>
        <Pressable
          className={`flex-1 rounded-[6px] items-center justify-center ${side === "sell" ? "bg-[rgba(255,81,96,0.15)]" : ""}`}
          onPress={() => setSide("sell")}
        >
          <Text className={`text-[13px] font-semibold ${side === "sell" ? "text-[#FF5160]" : "text-[#868789]"}`}>卖出</Text>
        </Pressable>
      </View>

      <View className="mt-[16px] border-[1.5px] border-[#303135] rounded-[8px] px-[12px] py-[10px] bg-[rgba(13,15,19,0.35)]">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-[8px]">
            {side === "buy" ? <BNBIcon className="w-[24px] h-[24px]" /> : <MyAvatar src={"/images/test.png"} className="w-[24px] h-[24px]" />}
            <Text className="text-[16px] text-[#fff]">BNB</Text>
          </View>
          <TextInput
            className="text-[20px] text-[#fff] text-right flex-1"
            placeholder="0"
            placeholderTextColor="#868789"
          />
        </View>
      </View>

      <View className="h-[48px] flex flex-row items-center justify-between">
        <Text className="text-[13px] text-[#868789]">钱包余额 3.26542 BNB</Text>
        <View className="flex flex-row items-center gap-[4px]">
          <Text className="text-[12px] text-[#868789]">滑点</Text>
          <Text className="text-[12px] text-[#fff]">1%</Text>
          <SettingIcon />
        </View>
      </View>

      <View className="h-[48px] border-[1px] border-dashed border-[#303135] rounded-[8px] flex flex-row items-center justify-between px-[12px]">
        <Text className="text-[13px] text-[#868789]">预计获得</Text>
        <View className="flex flex-row items-center gap-[4px]">
          {side === "sell" ? <BNBIcon className="w-[16px] h-[16px]" /> : <MyAvatar src={"/images/test.png"} className="w-[16px] h-[16px]" />}
          <Text className="text-[13px] text-[#fff]">54,0000</Text>
        </View>
      </View>

      <Pressable
        className={`h-[44px] rounded-[12px] items-center justify-center mt-[16px] ${side === "buy" ? "bg-[#FD7438]" : "bg-[#FF5160]"}`}
      >
        <Text className="text-[15px] text-[#fff]">{side === "buy" ? "挖矿" : "卖出"}</Text>
      </Pressable>
    </View>
  );
}
