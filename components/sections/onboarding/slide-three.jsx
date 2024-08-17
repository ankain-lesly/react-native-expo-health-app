import { View, Text, ScrollView } from "react-native";
import React from "react";
import useDeviceWpHp from "@/hooks/useDeviceWpHp";
import Button from "@/components/button";

const OnboardSlideThree = ({ width }) => {
  const { hp } = useDeviceWpHp();
  const actionList = [
    "Sleepiness",
    "Sadness",
    "Anxiety",
    "Stress",
    "Loneliness",
    "Insomnia",
    "Anger",
    "Apathy",
    "Envy",
    "Others",
  ];

  return (
    <View
      style={{ width }}
      className="flex-1 bg-black items-center-justify-center">
      <View
        className="bg-orange-400 shadow-lg rounded-b-3xl items-center justify-center"
        style={{ height: hp(50) }}>
        <View className="h-36 w-36 opacity-50 bg-white rounded-full shadow-xl"></View>
      </View>
      {/* footer */}

      <View
        style={{
          height: 80,
          // backgroundColor: "red",
        }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: 15,
            height: 60,
          }}
          className="h-14">
          {actionList.map((item, i) => (
            <View className={`m-2`} key={i}>
              <Button
                text={item}
                classes={`bg-dark ${item == "Apathy" ? "bg-dark" : ""}`}
                ngClass="text-white"
              />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Text */}
      <Text className="p-5 text-2xl font-semibold text-white text-center mt-2">
        How do you feel today?
      </Text>

      <Text>screen-Three</Text>
    </View>
  );
};

export default OnboardSlideThree;
