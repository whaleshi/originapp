import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { BackIcon, ShareIcon } from "@/components/origin/icons";
import Market from "@/components/origin/market";
import Mining from "@/components/origin/mining";
import { useRouter } from "expo-router";

export default function Token() {
  const [activeTab, setActiveTab] = useState<"market" | "mining">("mining");
  const router = useRouter();

  return (
    <View className="flex flex-col items-center w-full">
      <View className="h-[48px] flex flex-row items-center px-[16px] w-full">
        <Pressable onPress={() => router.back()}>
          <BackIcon />
        </Pressable>
        <View className="flex-1 items-center">
          <View className="flex flex-row h-[32px] border-[1px] border-[#25262A] rounded-[16px] overflow-hidden">
            <Pressable
              className={`w-[90px] items-center justify-center ${activeTab === "market" ? "bg-[#303135]" : ""}`}
              onPress={() => setActiveTab("market")}
            >
              <Text className={`text-[14px] ${activeTab === "market" ? "text-white" : "text-[#868789]"}`}>市场</Text>
            </Pressable>
            <Pressable
              className={`w-[90px] items-center justify-center ${activeTab === "mining" ? "bg-[#303135]" : ""}`}
              onPress={() => setActiveTab("mining")}
            >
              <Text className={`text-[14px] ${activeTab === "mining" ? "text-white" : "text-[#868789]"}`}>挖矿</Text>
            </Pressable>
          </View>
        </View>
        <ShareIcon />
      </View>
      <ScrollView className="w-full" contentContainerClassName="px-[14px] items-center pb-[40px]">
        {activeTab === "market" ? <Market /> : <Mining />}
      </ScrollView>
    </View>
  );
}
