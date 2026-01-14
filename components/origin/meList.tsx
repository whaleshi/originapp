import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import TokenItem from "./tokenItem";

export default function MeList() {
  const [activeTab, setActiveTab] = useState("新创建");
  const tabs = ["新创建", "已发射", "矿池"];

  return (
    <View>
      <View className="h-[52px] flex flex-row items-center justify-between">
        <View className="flex flex-row gap-[12px]">
          {tabs.map((tab) => (
            <Pressable key={tab} onPress={() => setActiveTab(tab)}>
              <Text className={`text-[16px] ${activeTab === tab ? "text-white" : "text-[#868789]"}`}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View className="w-full">
        {Array.from({ length: 9 }).map((_, index) => (
          <View key={index} className="mb-[8px]">
            <TokenItem type={(index % 3) + 1} />
          </View>
        ))}
      </View>
    </View>
  );
}
