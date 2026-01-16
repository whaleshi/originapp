import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import TopScroll from "@/components/origin/topScroll";
import TopCanvas from "@/components/origin/topCanvas";
import HomeList from "@/components/origin/homeList";
import { useAppTheme } from "@/components/theme/ThemeProvider";

export default function Index() {
  const router = useRouter();
  const { colors } = useAppTheme();

  return (
    <ScrollView className="flex-1" contentContainerClassName="pb-[20px]">
      <View className="relative">
        <View className="w-full h-[200px] mx-auto relative">
          <TopCanvas />
          <View className="w-full h-full absolute top-0 z-10 flex items-center justify-center">
            <View className="items-center">
              <Text className="text-[24px] font-bold" style={{ color: colors.text }}>
                让 MEME 的诞生回归
                <Text className="text-[#FD7438]">起源</Text>
              </Text>
              <Text className="text-[14px] mt-[16px]" style={{ color: colors.textSecondary }}>运行机制→</Text>
              {/* <Pressable
                className="mt-[12px] px-[14px] h-[32px] rounded-[8px] border-[1px] border-[#FD7438] items-center justify-center"
                onPress={() => router.push("/privy")}
              >
                <Text className="text-[13px] text-[#FD7438]">连接 Privy</Text>
              </Pressable> */}
            </View>
          </View>
        </View>
        <View className="absolute top-[8px] w-full z-10">
          <TopScroll />
        </View>
      </View>
      <View className="relative z-10">
        <HomeList />
      </View>
    </ScrollView>
  );
}
