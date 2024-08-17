import storage from "@/lib/local-storage";
import { Link, router } from "expo-router";
import { View, Text, Button, Pressable } from "react-native";

export default function TabTwoScreen() {
  const handleClearLogged = async () => {
    await storage.removeItem("isLogged");
    router.push("/");
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold text-center">Explore</Text>
      <View className="justify-center flex-row">
        <Button title="Sitemap" onPress={() => router.push("__xyz__")} />
        <Button
          title="Clear Logged"
          className="ml-5 block"
          onPress={handleClearLogged}
        />
      </View>
      <Link href="/create" className="absolute bottom-4 right-4" asChild>
        <Pressable className="w-16 h-16 rounded-full bg-blue-400 justify-center items-center flex shadow-lg">
          <Text className="text-4xl text-white">+</Text>
        </Pressable>
      </Link>
    </View>
  );
}
