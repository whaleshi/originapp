import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { PrivyProvider } from "@privy-io/expo";
import { PrivyElements } from "@privy-io/expo/ui";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { HeroUINativeProvider } from 'heroui-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <HeroUINativeProvider>
            <PrivyProvider
              appId={Constants.expoConfig?.extra?.privyAppId}
              clientId={Constants.expoConfig?.extra?.privyClientId}
            >
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: { backgroundColor: "#0D0F13" },
                  animation: "none",
                }}
              />
              <PrivyElements />
            </PrivyProvider>
          </HeroUINativeProvider>
        </GestureHandlerRootView>

      </ThemeProvider>
    </SafeAreaProvider>
  );
}
