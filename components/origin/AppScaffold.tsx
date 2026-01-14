import React from "react";
import { View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { usePathname } from "expo-router";
import { Navbar } from "./navbar";
import Footer from "./footer";

export default function AppScaffold({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const hideFooter =
    pathname === "/create" || pathname === "/search" || pathname.startsWith("/token/");

  return (
    <SafeAreaView
      className="flex-1 bg-[#0D0F13]"
      style={{ flex: 1, backgroundColor: "#0D0F13" }}
      edges={["top", "left", "right"]}
    >
      <Navbar />
      <View
        className="flex-1"
        style={{
          flex: 1,
          paddingBottom: hideFooter ? insets.bottom : 52 + insets.bottom,
        }}
      >
        {children}
      </View>
      {!hideFooter && <Footer />}
    </SafeAreaView>
  );
}
