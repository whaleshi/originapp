import React from "react";
import { ScrollView, Text, View } from "react-native";
import CreateForm from "@/components/origin/form";
import AppScaffold from "@/components/origin/AppScaffold";

export default function CreatePage() {
  return (
    <AppScaffold>
      <ScrollView className="flex-1" contentContainerClassName="pb-[40px]">
        <View className="h-[48px] flex flex-row items-center px-[16px] w-full">
          <View className="w-[24px] h-[24px]" />
          <View className="flex-1 items-center">
            <Text className="text-[17px] text-[#E6E6E6]">创建代币</Text>
          </View>
          <View className="w-[24px] h-[24px]" />
        </View>
        <CreateForm />
      </ScrollView>
    </AppScaffold>
  );
}
