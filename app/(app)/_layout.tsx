import React from "react";
import { View } from "react-native";
import { Slot, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Navbar } from "@/components/origin/navbar";
import Footer from "@/components/origin/footer";
import { useAppTheme } from "@/components/theme/ThemeProvider";

export default function AppLayout() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const { colors, isDark } = useAppTheme();
  const hideFooter =
    pathname === "/create" || pathname === "/search" || pathname.startsWith("/token/");

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
      edges={["top", "left", "right"]}
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      <Navbar />
      <View
        className="flex-1"
        style={{
          flex: 1,
          paddingBottom: hideFooter ? insets.bottom : 52 + insets.bottom,
        }}
      >
        <Slot />
      </View>
      {!hideFooter && <Footer />}
    </SafeAreaView>
  );
}
