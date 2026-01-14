import React from "react";
import { Pressable, Text, View } from "react-native";
import { CopyIcon, LogoutIcon, WalletIcon } from "./icons";

export const WalletBox = () => {
  return (
    <View className="w-full border-[1.5px] border-[#303135] rounded-[12px] bg-[#191B1F]">
      <View className="bg-[#25262A] rounded-t-[12px] px-[16px]">
        <View className="w-full h-[74px] flex flex-row items-center justify-between">
          <View>
            <Text className="text-[12px] text-[rgba(255,255,255,0.35)]">钱包余额</Text>
            <Text className="text-[20px] text-[#fff] font-bold">12.89 BNB</Text>
          </View>
          <Pressable className="h-[27px] px-[12px] border-[#868789] border-[1px] rounded-full items-center justify-center">
            <Text className="text-[13px] text-[#FFF]">接收</Text>
          </Pressable>
        </View>
      </View>
      <View className="h-[44px] flex flex-row items-center justify-between px-[16px]">
        <View className="flex flex-row items-center gap-[8px]">
          <WalletIcon className="text-[#868789]" />
          <Text className="text-[13px] text-[#868789]">0x1234...5678</Text>
          <CopyIcon />
        </View>
        <LogoutIcon />
      </View>
    </View>
  );
};
