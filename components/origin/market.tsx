import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import MyAvatar from "./avatar";
import { CopyIcon, TgIcon, WebIcon, XIcon } from "./icons";
import MarketTrade from "./marketTrade";

export default function Market() {
  const [side, setSide] = useState<"buy" | "sell">("buy");

  return (
    <View className="max-w-[600px] w-full">
      <View className="mt-[24px] flex flex-row items-center">
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
      </View>

      <View className="border-[1px] border-dashed border-[#25262A] rounded-[10px] my-[24px]">
        <View className="h-[40px] flex flex-row w-full">
          <View className="text-[14px] text-[#868789] px-[12px] flex-1 flex-row items-center justify-between border-r-[1px] border-dashed border-[#25262A]">
            <Text className="text-[#868789]">市值</Text>
            <Text className="text-[#fff]">$24.36M</Text>
          </View>
          <View className="text-[14px] text-[#868789] px-[12px] flex-1 flex-row items-center justify-between">
            <Text className="text-[#868789]">FDV</Text>
            <Text className="text-[#fff]">$24.36M</Text>
          </View>
        </View>
        <View className="p-[12px] border-t-[1px] border-dashed border-[#25262A]">
          <Text className="text-[12px] text-[#868789]">Bonding Curve 进度</Text>
          <Text className="text-[#fff] text-[16px] font-semibold">68.32%</Text>
        </View>
      </View>

      <View className="flex flex-row items-center gap-[8px] mt-[12px]">
        <XIcon />
        <TgIcon />
        <WebIcon />
      </View>

      <View className="mt-[24px]">
        <View className="flex flex-row gap-[8px] bg-[#25262A] rounded-[8px] p-[6px]">
          <Pressable
            className={`flex-1 rounded-[6px] items-center justify-center h-[32px] ${side === "buy" ? "bg-[#1E2025]" : ""}`}
            onPress={() => setSide("buy")}
          >
            <Text className={`text-[12px] ${side === "buy" ? "text-[#E9FFEF]" : "text-[#868789]"}`}>买入</Text>
          </Pressable>
          <Pressable
            className={`flex-1 rounded-[6px] items-center justify-center h-[32px] ${side === "sell" ? "bg-[#1E2025]" : ""}`}
            onPress={() => setSide("sell")}
          >
            <Text className={`text-[12px] ${side === "sell" ? "text-[#FFE9EB]" : "text-[#868789]"}`}>卖出</Text>
          </Pressable>
        </View>
        <MarketTrade side={side} />
      </View>

      <View className="bg-[#191B1F] p-[12px] border-[1px] border-[#25262A] rounded-[8px] mt-[24px] text-[13px] text-[#868789] flex flex-col gap-[8px] mb-[30px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#868789]">代币总量</Text>
          <Text className="text-[#fff]">10 亿枚</Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#868789]">联合曲线总量</Text>
          <Text className="text-[#fff]">8000 万枚</Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#868789]">Pancake 流动性</Text>
          <Text className="text-[#fff]">2000 万枚</Text>
        </View>
        <View className="border-y-[1px] border-[#303135] border-dashed flex flex-col gap-[8px] py-[8px]">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[#868789]">代币挖矿预留</Text>
            <Text className="text-[#fff]">9 亿枚</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[#868789]">挖矿状态</Text>
            <Text className="text-[#FD7438]">待激活</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#868789]">合约地址</Text>
          <View className="flex flex-row items-center gap-[4px]">
            <Text className="text-[#fff] underline">0x1234...1234</Text>
            <CopyIcon />
          </View>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[#868789]">创建者</Text>
          <View className="flex flex-row items-center gap-[4px]">
            <Text className="text-[#fff] underline">0x1234...1234</Text>
            <CopyIcon />
          </View>
        </View>
      </View>
    </View>
  );
}
