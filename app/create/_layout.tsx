import CustomTabBarCreate from "@/components/navigation/CustomTabBarCreate";
// import TabBarCreate from "@/components/navigation/CustomTabBarCreate";
import { Tabs } from "expo-router";

import "react-native-reanimated";
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBarCreate {...props} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="options" />
    </Tabs>
  );
}
