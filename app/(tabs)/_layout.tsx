import { Tabs, router } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import colors from "@/constants/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.primary,
        tabBarStyle: {
          // backgroundColor: colors.primary,
          borderTopWidth: 0,
          borderTopColor: colors.black200,
          height: 68,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused, ...others }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
