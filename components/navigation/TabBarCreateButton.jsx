import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { icons } from "@/constants/icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function TabBarCreateButton({
  routeName,
  isFocused,
  label,
  onPress,
}) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused == "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);
    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });
  return (
    <Pressable onPress={onPress} className="flex-1 justify-center items-center">
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName]({
          color: isFocused ? "blue" : "gray",
        })}
      </Animated.View>

      <Animated.Text
        style={[animatedTextStyle]}
        className={`font-bold text-sm ${
          isFocused ? "text-blue-600" : "text-gray-900"
        }`}>
        {label}
      </Animated.Text>
    </Pressable>
  );
}
