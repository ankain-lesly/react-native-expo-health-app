import { View, Text, ScrollView } from "react-native";
import React from "react";
import useDeviceWpHp from "@/hooks/useDeviceWpHp";

const OnboardSlideOne = ({ width }) => {
  const { wp, hp } = useDeviceWpHp();
  const colors = ["blue", "purple", "yellow", "cyan"];
  return (
    <View
      style={{ width }}
      className="flex-1 w-full h-full bg-orange-300 items-center justify-center">
      <Text className="p-5 text-2xl mt-4 font-semibold text-center">
        Sarah, What are you like today?
      </Text>

      <View className="h-max mt-5 relative" style={{ height: hp(50) }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 50,
          }}>
          {[...Array(5).keys()].map((i) => (
            <View
              className="my-5 mr-10 h-52 rounded-3xl items-center justify-center shadow-lg -rotate-6 opacity-0"
              key={i}
              style={{ width: wp(60), backgroundColor: colors[i] }}>
              <View className="p-5 bg-white opacity-60 rounded-xl"></View>
              <Text className="p-5 text-lg uppercase rounded-xl">Happy 😁</Text>
            </View>
          ))}

          <View className="absolute flex-row -left-32">
            {[...Array(5).keys()].map((i) => (
              <View
                className={`my-8 mr-10 rounded-3xl items-center justify-center shadow-lg -rotate-6 ${
                  i == 1 ? "scale-125" : ""
                }`}
                key={i}
                style={{
                  width: wp(48),
                  height: wp(48),
                  backgroundColor: colors[i],
                }}>
                <View className="p-5 bg-white opacity-60 rounded-xl"></View>
                <Text className="p-5 text-lg uppercase rounded-xl">
                  Happy 😁
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default OnboardSlideOne;
