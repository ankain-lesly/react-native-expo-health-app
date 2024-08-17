import { View, Text, ScrollView } from "react-native";
import React from "react";
import useDeviceWpHp from "@/hooks/useDeviceWpHp";
import Button from "@/components/button";

const OnboardSlideFour = ({ width }) => {
  const { hp } = useDeviceWpHp();

  return (
    <View
      style={{ width, backgroundColor: "blue" }}
      className="flex-1 items-center justify-center p-4">
      <View
        className="bg-orange-400 w-full shadow-lg m-4 rounded-3xl items-center justify-center"
        style={{ height: hp(50) }}>
        <View className="h-36 w-36 opacity-50 bg-white rounded-full shadow-xl"></View>

        {/* Text */}
        <Text className="p-5 text-4xl font-semibold text-white text-center mt-2">
          Huraay 😁
        </Text>
      </View>
      {/* footer */}
    </View>
  );
};

export default OnboardSlideFour;
