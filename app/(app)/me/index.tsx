import React from "react";
import { ScrollView, Text, View } from "react-native";
import { WalletBox } from "@/components/origin/wallet";
import MeList from "@/components/origin/meList";
import AppScaffold from "@/components/origin/AppScaffold";

export default function Me() {
  return (
    <AppScaffold>
      <ScrollView className="flex-1" contentContainerClassName="px-[14px] pb-[40px]">
        <Text className="text-[28px] text-[#fff] font-bold my-[24px]">我的</Text>
        <WalletBox />
        <View className="mt-[24px]">
          <MeList />
        </View>
      </ScrollView>
    </AppScaffold>
  );
}
