import React, { useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import TokenItem from "@/components/origin/tokenItem";
import { CloseIcon, SearchInputIcon } from "@/components/origin/icons";
import { useRouter } from "expo-router";
import { originImages } from "@/components/origin/assets";
import { Image } from "react-native";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  return (
    <View className="flex-1">
        <View className="px-[16px] py-[8px] flex flex-row items-center gap-[16px]">
          <View className="flex-1 flex flex-row items-center bg-[#191B1F] border-[1px] border-[#25262A] rounded-[8px] px-[8px]">
            <SearchInputIcon />
            <TextInput
              className="flex-1 text-[14px] text-white ml-[8px]"
              placeholder="请输入"
              placeholderTextColor="#4A4B4E"
              value={inputValue}
              onChangeText={setInputValue}
            />
            {inputValue ? (
              <Pressable onPress={() => setInputValue("")}>
                <CloseIcon className="w-[16px] h-[16px]" />
              </Pressable>
            ) : null}
          </View>
          <Pressable onPress={() => router.push("/")}>
            <Text className="text-[14px] text-white">取消</Text>
          </Pressable>
        </View>
        {inputValue ? (
          <ScrollView className="flex-1" contentContainerClassName="py-[16px] px-[14px] pb-[40px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <View key={index} className="mb-[8px]">
                <TokenItem type={2} />
              </View>
            ))}
          </ScrollView>
        ) : (
          <View className="flex items-center justify-center pt-[120px]">
            <Image source={originImages.nothing} className="w-[80px] h-[80px]" />
            <Text className="text-[#868789] text-[14px] mt-[12px]">暂无数据</Text>
          </View>
        )}
    </View>
  );
}
