import storage from "@/lib/local-storage";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function OnboardLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack InitialRouteName="new-onboarding">
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
