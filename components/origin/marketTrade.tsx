import React from "react";
import { Text, TextInput, View } from "react-native";
import { BNBIcon } from "./icons";
import MyAvatar from "./avatar";

export default function MarketTrade({ side = "buy" }: { side?: "buy" | "sell" }) {
  return (
    <View className="w-full mt-[16px]">
      <View className="bg-[#191B1F] border-[1px] border-[#25262A] rounded-[8px] p-[12px]">
        <Text className="text-[12px] text-[#868789]">数量</Text>
        <View className="flex flex-row items-center justify-between mt-[8px]">
          <TextInput
            className="text-[20px] text-[#fff] flex-1"
            placeholder="0.00"
            placeholderTextColor="#4A4B4E"
          />
          <View className="flex flex-row items-center gap-[6px]">
            {side === "buy" ? <BNBIcon className="w-[20px] h-[20px]" /> : <MyAvatar src={"/images/test.png"} className="w-[20px] h-[20px]" />}
            <Text className="text-[14px] text-[#fff]">{side === "buy" ? "BNB" : "TOKEN"}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
