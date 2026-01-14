import React from "react";
import { Pressable, Text, View } from "react-native";
import { CloseIcon } from "./icons";

export default function MiningDialog({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!isOpen) return null;

  return (
    <View className="absolute inset-0 items-center justify-end">
      <Pressable
        className="absolute inset-0 bg-black/70"
        onPress={() => onOpenChange(false)}
      />
      <View className="w-full bg-[#191B1F] border-t border-[#303135] rounded-t-[12px] p-[16px]">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[16px] text-[#fff]">挖矿奖励</Text>
          <Pressable onPress={() => onOpenChange(false)}>
            <CloseIcon />
          </Pressable>
        </View>
        <Text className="text-[12px] text-[#868789] mt-[12px]">这里展示挖矿奖励信息。</Text>
      </View>
    </View>
  );
}
