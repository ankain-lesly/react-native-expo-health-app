import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({
  text,
  children,
  style,
  onPress,
  classes = "",
  ngClass = "",
}) => {
  const BaseClass = "px-6 py-3 rounded-full " + classes;
  return (
    <TouchableOpacity style={style} onPress={onPress} className={BaseClass}>
      {text && (
        <Text className={"text-center font-semibold " + ngClass}>{text}</Text>
      )}
      {children && children}
    </TouchableOpacity>
  );
};

export default Button;
