import React from "react";
import { View } from "react-native";

export default function TopCanvas() {
  return (
    <View className="w-full h-full bg-[#0D0F13] overflow-hidden">
      <View className="absolute -top-[80px] left-1/2 -translate-x-1/2 w-[240px] h-[240px] rounded-full bg-[#1E2025] opacity-60" />
      <View className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[180px] h-[180px] rounded-full bg-[#302A3A] opacity-50" />
      <View className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-[#4A2D3A] opacity-40" />
    </View>
  );
}
