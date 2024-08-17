import { Platform, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import colors from "@/constants/colors";

export const ScreenWrapper = ({ style, children, isStatusBar = true }) => {
  return (
    <>
      <SafeAreaView className={`${style}`} style={{ flex: 1 }}>
        {children}
      </SafeAreaView>
      {isStatusBar && (
        <StatusBar backgroundColor={colors.primary} style="light" />
      )}
    </>
  );
};

export const ScreenWrapperScroll = ({
  style,
  children,
  isStatusBar = true,
}) => {
  return (
    <>
      <SafeAreaView className={`${style}`} style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
          }}>
          {children}
        </ScrollView>
      </SafeAreaView>
      {isStatusBar && (
        <StatusBar backgroundColor={colors.primary} style="light" />
      )}
    </>
  );
};

export const ScreenWithKeyboardAvoiding = ({ style, children }) => {
  return (
    <SafeAreaView className={`${style}`} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            // minHeight: "100%",
            // justifyContent: center ? "center" : "flex-start",
          }}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
