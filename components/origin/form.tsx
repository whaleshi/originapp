import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { AddIcon, CopyIcon } from "./icons";
import MyAvatar from "./avatar";

export default function CreateForm() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <View className="flex flex-col items-center w-full px-[16px] pt-[8px] gap-[24px]">
      <View className="flex flex-col gap-[8px] w-full">
        <Text className="text-[14px] text-[#868789] font-bold">头像</Text>
        <View className="flex flex-row items-center gap-[12px]">
          <View className="w-[80px] h-[80px] rounded-full border-[1px] border-[#25262A] bg-[#191B1F] items-center justify-center">
            <AddIcon />
          </View>
          <MyAvatar src={"/images/test.png"} className="w-[80px] h-[80px]" />
        </View>
      </View>

      <View className="w-full">
        <Text className="text-[14px] text-[#868789] mb-[8px]">名称</Text>
        <TextInput
          className="h-[44px] rounded-[8px] border-[1px] border-[#25262A] bg-[#191B1F] px-[12px] text-[14px] text-white"
          placeholder="请输入代币名称"
          placeholderTextColor="#4A4B4E"
        />
      </View>

      <View className="w-full">
        <Text className="text-[14px] text-[#868789] mb-[8px]">Ticker</Text>
        <TextInput
          className="h-[44px] rounded-[8px] border-[1px] border-[#25262A] bg-[#191B1F] px-[12px] text-[14px] text-white"
          placeholder="输入代币符号"
          placeholderTextColor="#4A4B4E"
        />
      </View>

      <View className="w-full">
        <Text className="text-[14px] text-[#868789] mb-[8px]">描述</Text>
        <TextInput
          className="h-[80px] rounded-[8px] border-[1px] border-[#25262A] bg-[#191B1F] px-[12px] text-[14px] text-white"
          placeholder="输入代币描述"
          placeholderTextColor="#4A4B4E"
          multiline
        />
      </View>

      {showSocial ? (
        <View className="w-full gap-[16px]">
          <View>
            <Text className="text-[14px] text-[#868789] mb-[8px]">网站</Text>
            <TextInput
              className="h-[44px] rounded-[8px] border-[1px] border-[#25262A] bg-[#191B1F] px-[12px] text-[14px] text-white"
              placeholder="https://"
              placeholderTextColor="#4A4B4E"
            />
          </View>
          <View>
            <Text className="text-[14px] text-[#868789] mb-[8px]">X</Text>
            <TextInput
              className="h-[44px] rounded-[8px] border-[1px] border-[#25262A] bg-[#191B1F] px-[12px] text-[14px] text-white"
              placeholder="@username"
              placeholderTextColor="#4A4B4E"
            />
          </View>
          <View>
            <Text className="text-[14px] text-[#868789] mb-[8px]">Telegram</Text>
            <TextInput
              className="h-[44px] rounded-[8px] border-[1px] border-[#25262A] bg-[#191B1F] px-[12px] text-[14px] text-white"
              placeholder="@group"
              placeholderTextColor="#4A4B4E"
            />
          </View>
        </View>
      ) : null}

      <Pressable
        className="w-[120px] h-[36px] border-[1px] border-[#303135] rounded-full items-center justify-center"
        onPress={() => setShowSocial((prev) => !prev)}
      >
        <Text className="text-[12px] text-[#868789]">{showSocial ? "收起社交链接" : "添加社交链接"}</Text>
      </Pressable>

      <Pressable className="w-full rounded-[8px] h-[48px] bg-[#FD7438] items-center justify-center">
        <Text className="text-[15px] text-[#fff]">提交</Text>
      </Pressable>

      <View className="w-full items-center">
        <View className="flex flex-row items-center gap-[4px]">
          <Text className="text-[11px] text-[#868789]">0x1234...5678</Text>
          <CopyIcon />
        </View>
      </View>
    </View>
  );
}
