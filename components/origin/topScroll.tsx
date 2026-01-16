import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View, Text, type NativeScrollEvent, type NativeSyntheticEvent } from "react-native";
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
  const scrollRef = useRef<ScrollView | null>(null);
  const scrollX = useRef(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!contentWidth || !containerWidth) return;
    const singleWidth = contentWidth / 2;
    if (singleWidth === 0 || containerWidth === 0) return;
    const timer = setInterval(() => {
      scrollX.current = scrollX.current + 1;
      if (scrollX.current >= singleWidth) {
        scrollX.current = 0;
      }
      scrollRef.current?.scrollTo({ x: scrollX.current, animated: false });
    }, 16);
    return () => clearInterval(timer);
  }, [contentWidth, containerWidth]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.current = event.nativeEvent.contentOffset.x;
  };

  const items = [...transactions, ...transactions];

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="w-full"
      scrollEventThrottle={16}
      onScroll={handleScroll}
      onContentSizeChange={(width) => setContentWidth(width)}
      onLayout={(event) => setContainerWidth(event.nativeEvent.layout.width)}
    >
      <View className="flex flex-row items-center">
        {items.map((tx, index) => {
          const colorScheme = colorSchemes[index % colorSchemes.length];
          return (
            <View
              key={`${tx.id}-${index}`}
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
