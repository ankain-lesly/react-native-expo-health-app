import { Animated, FlatList, View, useWindowDimensions } from "react-native";
import React, { useRef, useState } from "react";
import { ScreenWrapperScroll } from "@/components/wrappers/ScreenWrapper";
import OnboardSlideOne from "@/components/sections/onboarding/slide-one";
import OnboardSlideTwo from "@/components/sections/onboarding/slide-two";
import OnboardSlideThree from "@/components/sections/onboarding/slide-three";
import SlidesIndicator from "@/components/sections/onboarding/ui/slides-indicator";
import SlidesActionsBottom from "@/components/sections/onboarding/ui/slides-actions-bottom";
import OnboardSlideFour from "@/components/sections/onboarding/slide-four";

const onboarding = () => {
  const { width } = useWindowDimensions();
  const slides = [
    OnboardSlideOne,
    OnboardSlideTwo,
    OnboardSlideThree,
    OnboardSlideFour,
  ];
  const slidesRef = useRef(null);

  // CODE: const setup
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  // scroll
  const handleNextSlide = (skip = false) => {
    if (skip) {
      setCurrentIndex(slides.length - 1);
      slidesRef?.current.scrollToIndex({ index: slides.length - 1 });
    } else if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
      slidesRef?.current.scrollToIndex({ index: currentIndex + 1 });
    } else console.log("End of slides");
  };
  return (
    <ScreenWrapperScroll>
      <View className="relative flex-1">
        {/* Slides */}
        <View className="flex-1">
          <FlatList
            ref={slidesRef}
            // onMomentumScrollEnd={updateCurrentSlideIndex}
            // contentContainerStyle={{ height: height * 0.75 }}
            data={slides}
            renderItem={({ item: Slide }) => <Slide width={width} />}
            keyExtractor={(item) => item}
            pagingEnabled
            // renderItem={({ item: Slide }) => console.log(Slide)}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            scrollEventThrottle={32}
          />
        </View>
        {/* Indicator */}
        <SlidesIndicator
          width={width}
          count={slides.length}
          scrollX={scrollX}
        />
        {/* Actions */}
        <SlidesActionsBottom
          handleNextSlide={handleNextSlide}
          count={slides.length}
          index={currentIndex}
        />
      </View>
    </ScreenWrapperScroll>
  );
};

export default onboarding;
