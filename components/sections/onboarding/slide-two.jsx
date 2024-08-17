import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import Button from "@/components/button";
import useDeviceWpHp from "@/hooks/useDeviceWpHp";

const OnboardSlideTwo = ({ width }) => {
  const { wp } = useDeviceWpHp();

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
      className="bg-red-500 flex-1 items-center justify-center">
      <Text className="p-5 text-2xl font-semibold text-center mt-4">
        What's Worrying you?
      </Text>

      <ScrollView style={{ flex: 1 }} className="bg-orange-300_">
        <View className="">
          <FlatList
            data={actionList}
            renderItem={({ item }) => (
              <View className={`m-2`} style={{ width: wp(45) }}>
                <Button
                  text={item}
                  classes={`bg-dark-l ${item == "Apathy" ? "bg-dark" : ""}`}
                  ngClass="text-white"
                />
              </View>
            )}
            keyExtractor={(item) => item}
            pagingEnabled
            numColumns={2}
            // horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "space-between",
              // backgroundColor: "red",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OnboardSlideTwo;
