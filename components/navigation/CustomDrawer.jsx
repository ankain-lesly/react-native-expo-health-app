import { View, Text } from "react-native";
import { router, usePathname } from "expo-router";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { icons } from "@/constants/icons";

export default function CustomDrawer() {
  const pathname = usePathname();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView style={{ flex: 1, backgroundColor: "yellow" }}>
        <View className="bg-red-400 h-20 mb-4 items-center justify-center">
          <Text className="font-bold text-2xl text-white">Drawer Header</Text>
          <Text className="font-bold text-white">Screen: {pathname}</Text>
        </View>

        <View className="flex-1 h-full bg-re">
          {/* Items */}
          <DrawerItem
            icon={({ color, size }) => icons["index"](color, size)}
            label={"Home"}
            onPress={() => router.push("/")}
            // usePathname to set active item
          />
          <DrawerItem
            icon={({ color, size }) => icons["profile"](color, size)}
            label={"About"}
            onPress={() => router.push("/about")}
            // usePathname to set active item
          />
          <DrawerItem
            icon={({ color, size }) => icons["create"](color, size)}
            label={"Explore"}
            onPress={() => router.push("/explore")}
            // usePathname to set active item
          />
          <DrawerItem
            label={"Create now"}
            icon={({ color, size }) => icons["create"](color, size)}
            onPress={() => router.push("/create")}
            // usePathname to set active item
          />
        </View>
      </DrawerContentScrollView>
      {/* Bottom Actions */}
      <View>
        <Text>Actions</Text>
      </View>
      <View className="absolute left-0 right-0 bottom-0 bg-red-400">
        <View className="bg-blue-400 h-20 items-center justify-center">
          <Text className="font-bold text-2xl text-white">Drawer Actions</Text>
        </View>
      </View>
    </View>
  );
}
