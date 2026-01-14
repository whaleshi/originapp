import React from "react";
import { ScrollView, View, Text } from "react-native";
import MyAvatar from "./avatar";

const transactions = [
  { id: 1, address: "0x1234...1234", type: "卖出", amount: "0.18 BNB", token: "Launchcoin" },
  { id: 2, address: "0x1234...1234", type: "卖出", amount: "0.18 BNB", token: "Launchcoin" },
  { id: 3, address: "0x1234...1234", type: "卖出", amount: "0.18 BNB", token: "Launchcoin" },
  { id: 4, address: "0x1234...1234", type: "买入", amount: "0.18 BNB", token: "Launchcoin" },
  { id: 5, address: "0x1234...1234", type: "买入", amount: "0.18 BNB", token: "Launchcoin" },
];

const colorSchemes = [
  { bg: "#EC42FF33", text: "#EC42FF" },
  { bg: "#FF536133", text: "#FF5361" },
  { bg: "#FCC72933", text: "#FCC729" },
  { bg: "#22DAFA33", text: "#22DAFA" },
  { bg: "#1DEE7E33", text: "#1DEE7E" },
];

export default function TopScroll() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="w-full">
      <View className="flex flex-row items-center">
        {transactions.map((tx, index) => {
          const colorScheme = colorSchemes[index % colorSchemes.length];
          return (
            <View
              key={tx.id}
              className="flex flex-row items-center gap-1 px-3 h-[26px] mx-1 rounded-[6px]"
              style={{ backgroundColor: colorScheme.bg }}
            >
              <Text className="text-[12px] underline" style={{ color: colorScheme.text }}>
                {tx.address}
              </Text>
              <Text className="text-[12px]" style={{ color: colorScheme.text }}>
                {tx.type} {tx.amount}
              </Text>
              <MyAvatar src={"/images/test.png"} className="w-[14px] h-[14px]" />
              <Text className="text-[12px] underline" style={{ color: colorScheme.text }}>
                {tx.token}
              </Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
