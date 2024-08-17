import { View, Text } from "react-native";
import React from "react";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function UploadProfile() {
  const isPresented = router.canGoBack();

  if (isPresented) {
    <Redirect to="/profile" />;
  }
  return (
    <View className="p-4">
      <View className="flex-row gap-4 items-center justify-between mb-4 border-b">
        <Text className="text-4xl">Upload</Text>
        {isPresented && (
          <Link href="/profile" className="" asChild>
            <Text className="text-xl text-blue-500">close</Text>
          </Link>
        )}
      </View>
      <StatusBar style="light" />
    </View>
  );
}
