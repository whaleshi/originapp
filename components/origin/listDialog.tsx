import React from "react";
import { Pressable, Text, View } from "react-native";
import { CloseIcon, SearchInputIcon } from "./icons";

export default function ListDialog({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!isOpen) return null;

  return (
    <View className="absolute inset-0 items-center justify-end">
      <Pressable className="absolute inset-0 bg-black/70" onPress={() => onOpenChange(false)} />
      <View className="w-full bg-[#191B1F] border-t border-[#303135] rounded-t-[12px] p-[16px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[16px] text-[#fff]">选择代币</Text>
          <Pressable onPress={() => onOpenChange(false)}>
            <CloseIcon />
          </Pressable>
        </View>
        <View className="flex flex-row items-center gap-[8px] mt-[12px]">
          <SearchInputIcon />
          <Text className="text-[12px] text-[#868789]">搜索代币或地址</Text>
        </View>
      </View>
    </View>
  );
}
