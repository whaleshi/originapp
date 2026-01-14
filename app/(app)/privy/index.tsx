import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Constants from "expo-constants";
import { usePrivy } from "@privy-io/expo";
import LoginScreen from "@/components/LoginScreen";
import { UserScreen } from "@/components/UserScreen";

export default function PrivyPage() {
  const { user } = usePrivy();

  if ((Constants.expoConfig?.extra?.privyAppId as string).length !== 25) {
    return (
      <SafeAreaView>
        <View className="items-center justify-center">
          <Text className="text-white">You have not set a valid `privyAppId` in app.json</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (
    !(Constants.expoConfig?.extra?.privyClientId as string).startsWith("client-")
  ) {
    return (
      <SafeAreaView>
        <View className="items-center justify-center">
          <Text className="text-white">You have not set a valid `privyClientId` in app.json</Text>
        </View>
      </SafeAreaView>
    );
  }

  return !user ? <LoginScreen /> : <UserScreen />;
}
