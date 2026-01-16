import React from "react";
import { Pressable, Text, View } from "react-native";
import { usePathname, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FooterIcon1, FooterIcon2, SwapIcon } from "./icons";
import { useAppTheme } from "../theme/ThemeProvider";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();

  const items = [
    { id: "origin", label: "起源", path: "/", icon: <FooterIcon1 /> },
    { id: "swap", label: "swap", path: "/swap", icon: <FooterIcon1 /> },
    { id: "me", label: "我的", path: "/me", icon: <FooterIcon2 /> },
  ];

  return (
    <View
      className="absolute bottom-0 left-0 right-0 border-t"
      style={{ paddingBottom: insets.bottom, backgroundColor: colors.surface, borderColor: colors.border }}
    >
      <View className="flex flex-row items-center justify-around h-[52px]">
        {items.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Pressable
              key={item.id}
              className="flex-1 items-center justify-center"
              onPress={() => router.push(item.path)}
            >
              <View className={`mb-1 ${isActive ? "opacity-100" : "opacity-60"}`} style={{ color: isActive ? colors.text : colors.textSecondary }}>
                {item.icon}
              </View>
              <Text className={`text-[12px] font-medium`} style={{ color: isActive ? colors.text : colors.textSecondary }}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
