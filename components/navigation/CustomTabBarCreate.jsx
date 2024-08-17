import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import TabBarCreateButton from "./TabBarCreateButton";
import { icons } from "@/constants/icons";

export default function CustomTabBarCreate({ state, descriptors, navigation }) {
  return (
    <View className="absolute bottom-3 mx-4 left-0 right-0">
      <View className="px-4 py-3 flex-row gap-2 justify-between items-center bg-white rounded-full shadow-md shadow-emerald-900">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TabBarCreateButton
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              routeName={route.name}
              label={label}
            />
          );
          return (
            <>
              {index == 1 && (
                <View className="justify-center items-center">
                  <TouchableOpacity
                    onPress={() => router.replace("/")}
                    className="absolute w-16 h-16 items-center justify-center bg-red-400 rounded-full -translate-y-8">
                    <Text className="">
                      {icons["create"]({ color: "white" })}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                className="flex-1 justify-center items-center">
                {icons[route.name]({
                  color: isFocused ? "blue" : "gray",
                })}
                <Text
                  className={`font-bold text-sm ${
                    isFocused ? "text-emerald-600" : "text-gray-900"
                  }`}>
                  {label}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
}
