import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import TokenItem from "./tokenItem";
import { SearchIcon } from "./icons";
import { useAppTheme } from "../theme/ThemeProvider";

export default function HomeList() {
  const [activeTab, setActiveTab] = useState("新创建");
  const router = useRouter();
  const tabs = ["新创建", "已发射", "矿池"];
  const { colors } = useAppTheme();

  return (
    <View>
      <View className="h-[40px] px-[14px] flex flex-row items-center justify-between">
        <View className="flex flex-row gap-[12px]">
          {tabs.map((tab) => (
            <Pressable key={tab} onPress={() => setActiveTab(tab)}>
              <Text className={`text-[16px]`} style={{ color: activeTab === tab ? colors.text : colors.textSecondary }}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          className="h-[28px] rounded-full text-[13px] flex flex-row items-center gap-[4px] px-[12px]"
          onPress={() => router.push("/search")}
          style={{ backgroundColor: colors.surface }}
        >
          <SearchIcon />
          <Text className="text-[13px]" style={{ color: colors.textSecondary }}>搜索</Text>
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
