// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import IonIcons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export function TabBarIcon({ focused, ...rest }) {
  // console.log(rest);
  return (
    <View
      className={`w-14 h-7 transition-all duration-300 bg-transparent justify-center items-center rounded-3xl m-0 ${
        focused ? "bg-blue-200" : ""
      }`}>
      <IonIcons
        size={22}
        // style={[rest.style]}
        // style={[{ marginBottom: -3 }, rest.style]}
        {...rest}
      />
    </View>
  );
}
