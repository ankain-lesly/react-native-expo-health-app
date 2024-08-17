import { View } from "react-native";
import React from "react";
import Button from "@/components/button";
import useDeviceWpHp from "@/hooks/useDeviceWpHp";
import { router } from "expo-router";
import storage from "@/lib/local-storage";

const SlidesActionsBottom = ({ handleNextSlide, count, index }) => {
  const { wp } = useDeviceWpHp();

  const handleComplete = async () => {
    const isLogged = await storage.setItem("isLogged", "true");
    if (isLogged) router.replace("/home");
  };
  return (
    <View className="absolute left-0 right-0 bottom-4 px-5">
      {/* CODE: Slides handler */}

      {/* CODE: Complete handler */}
      {index < count - 1 ? (
        <View className="flex-row justify-between">
          <Button
            text={"Skip"}
            onPress={() => handleNextSlide(true)}
            ngClass="text-white font-extrabold"
          />
          <Button
            onPress={handleNextSlide}
            text={"Next >"}
            classes="bg-white"
            style={{ width: wp(60) }}
          />
        </View>
      ) : (
        <View className="flex-row justify-center">
          <Button
            onPress={handleComplete}
            text={"Get Started"}
            classes="bg-orange-500 flex-1"
            style={{ width: wp(50) }}
          />
        </View>
      )}
    </View>
  );
};

export default SlidesActionsBottom;
