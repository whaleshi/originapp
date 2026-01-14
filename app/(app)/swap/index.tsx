import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
// import {
//   BNBIcon,
//   SelectDownIcon,
//   SettingIcon,
//   SwapIcon,
//   ZuanIcon,
//   ZuanRightIcon,
// } from "@/components/origin/icons";
import SwapAbout from "@/components/origin/swapAbout";
import MiningDialog from "@/components/origin/miningDialog";
import { SwapList } from "@/components/origin/swapList";
import ListDialog from "@/components/origin/listDialog";
import AppScaffold from "@/components/origin/AppScaffold";

export default function Swap() {
  const [amount, setAmount] = useState("");
  const [isMiningDialogOpen, setIsMiningDialogOpen] = useState(false);
  const [isListDialogOpen, setIsListDialogOpen] = useState(false);

  return (
    <AppScaffold>
      <ScrollView className="flex-1" contentContainerClassName="items-center w-full px-[14px] pb-[40px]">
        <View className="w-full max-w-[600px] flex flex-row items-center justify-between mt-[24px]">
          <Text className="text-[28px] text-[#fff] font-bold">SWAP</Text>
          <Pressable
            className="w-[100px] h-[32px] rounded-r-[16px] flex flex-row items-center justify-center gap-[2px]"
            onPress={() => setIsMiningDialogOpen(true)}
          >
            {/* <ZuanIcon /> */}
            <Text className="text-[14px] text-[#EFB000]">挖矿奖励</Text>
            {/* <ZuanRightIcon /> */}
          </Pressable>
        </View>
        <View className="w-full max-w-[600px] mt-[24px]">
          <View className="h-[60px] border-[1.5px] border-[#191B1F] bg-[#191B1F] rounded-[8px] px-[12px] flex flex-row items-center">
            <TextInput
              className="text-[27px] text-[#fff] flex-1"
              placeholder="0.00"
              placeholderTextColor="#4A4B4E"
              value={amount}
              onChangeText={setAmount}
            />
            <View className="flex flex-row items-center gap-[6px] h-[36px] border-[1px] border-[#303135] px-[8px] rounded-full">
              {/* <BNBIcon className="w-[24px] h-[24px]" /> */}
              <Text className="text-[16px] text-[#fff]">BNB</Text>
            </View>
          </View>
          <View className="h-[52px] flex flex-row items-center">
            <Text className="text-[13px] text-[#868789] flex-1">
              钱包余额: <Text className="text-[#fff]">12.89 BNB</Text>
            </Text>
            {/* <SwapIcon className="w-[36px] h-[36px]" /> */}
            <View className="flex flex-row items-center justify-end gap-[4px] flex-1">
              <Text className="text-[13px] text-[#868789]">滑点</Text>
              <Text className="text-[13px] text-[#fff]">1%</Text>
              {/* <SettingIcon /> */}
            </View>
          </View>
          <View className="h-[60px] border-[1.5px] border-[#191B1F] bg-[#191B1F] rounded-[8px] px-[12px] flex flex-row items-center">
            <TextInput
              className="text-[27px] text-[#fff] flex-1"
              placeholder="0.00"
              placeholderTextColor="#4A4B4E"
              value={amount}
              onChangeText={setAmount}
            />
            <Pressable
              className="flex flex-row items-center gap-[6px] h-[36px] border-[1px] border-[#303135] px-[8px] rounded-full"
              onPress={() => setIsListDialogOpen(true)}
            >
              <Text className="text-[16px] text-[#fff]">Select</Text>
              {/* <SelectDownIcon /> */}
            </Pressable>
          </View>
          <Pressable className="h-[48px] bg-[#36383B] rounded-[8px] items-center justify-center mt-[16px]">
            <Text className="text-[15px] text-[#868789]">Swap</Text>
          </Pressable>
          <View className="mt-[32px] border-[1px] border-[#25262A] border-dashed rounded-[8px] overflow-hidden">
            <View className="h-[60px] flex flex-row">
              <View className="flex-1 items-center justify-center border-r-[1px] border-[#25262A] border-dashed">
                <Text className="text-[16px] text-[#fff]">$24.36M</Text>
                <Text className="text-[12px] text-[#868789]">市值</Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-[16px] text-[#fff]">$0.00032</Text>
                <Text className="text-[12px] text-[#868789]">价格</Text>
              </View>
            </View>
            <View className="h-[60px] flex flex-row border-t-[1px] border-[#25262A] border-dashed">
              <View className="flex-1 items-center justify-center border-r-[1px] border-[#25262A] border-dashed">
                <Text className="text-[16px] text-[#17C964]">+8.89%</Text>
                <Text className="text-[12px] text-[#868789]">24H 涨跌</Text>
              </View>
              <View className="flex-1 items-center justify-center">
                <Text className="text-[16px] text-[#fff]">$1.38K</Text>
                <Text className="text-[12px] text-[#868789]">流动性</Text>
              </View>
            </View>
          </View>
          <SwapAbout />
          <SwapList />
        </View>
        <MiningDialog isOpen={isMiningDialogOpen} onOpenChange={setIsMiningDialogOpen} />
        <ListDialog isOpen={isListDialogOpen} onOpenChange={setIsListDialogOpen} />
      </ScrollView>
    </AppScaffold>
  );
}
