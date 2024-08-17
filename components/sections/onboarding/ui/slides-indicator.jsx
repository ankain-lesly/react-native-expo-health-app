import { View, Animated } from "react-native";
import React from "react";

const SlidesIndicator = ({ count, scrollX, width }) => {
  // console.log(count, scrollX, width);
  return (
    <View className="absolute top-3 block px-5 left-0 right-0 flex-1 justify-between gap-x-4 flex-row z-10 bg-dark/10_">
      {[...Array(count).keys()].map((i) => {
        // const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const inputRangeOpacity = [(i - 1) * width, i * width, (i + 1) * width];
        const opacity = scrollX.interpolate({
          inputRange: inputRangeOpacity,
          // outputRange: [0.3, 1, 0.3],
          outputRange: [0.2, 1, 1],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={i}
            className={`flex-1 w-3 rounded-md h-1 shadow-md bg-dark border`}
            style={{ opacity }}
          />
        );
      })}
    </View>
  );
};

export default SlidesIndicator;
