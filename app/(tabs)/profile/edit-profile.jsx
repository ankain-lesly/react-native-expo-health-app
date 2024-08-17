import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ScreenWrapperScroll } from "@/components/wrappers/ScreenWrapper";

export default function EditProfile() {
  return (
    <ScreenWrapperScroll>
      <Text className="p-4 text-4xl">Edit Profile</Text>

      <Link href="/profile" className="font-bold text-blue-500 mx-4" asChild>
        <Text className="text-xl text-white">Back</Text>
      </Link>
    </ScreenWrapperScroll>
  );
}
