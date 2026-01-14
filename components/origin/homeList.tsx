import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import TokenItem from "./tokenItem";
import { SearchIcon } from "./icons";

export default function HomeList() {
  const [activeTab, setActiveTab] = useState("新创建");
  const router = useRouter();
  const tabs = ["新创建", "已发射", "矿池"];

  return (
    <View>
      <View className="h-[52px] px-[14px] flex flex-row items-center justify-between">
        <View className="flex flex-row gap-[12px]">
          {tabs.map((tab) => (
            <Pressable key={tab} onPress={() => setActiveTab(tab)}>
              <Text className={`text-[16px] ${activeTab === tab ? "text-white" : "text-[#868789]"}`}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          className="h-[28px] bg-[#191B1F] rounded-full text-[13px] text-[#5A575E] flex flex-row items-center gap-[4px] px-[12px]"
          onPress={() => router.push("/search")}
        >
          <SearchIcon />
          <Text className="text-[13px] text-[#5A575E]">搜索</Text>
        </Pressable>
      </View>
      <View className="w-full px-[14px]">
        {Array.from({ length: 9 }).map((_, index) => (
          <View key={index} className="mt-[8px]">
            <TokenItem type={(index % 3) + 1} />
          </View>
        ))}
      </View>
    </View>
  );
}
