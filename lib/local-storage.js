// import { AsyncStorage } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "my_app_storage";

const storage = {
  async setItem(key, value) {
    try {
      await AsyncStorage.setItem(
        `${STORAGE_KEY}:${key}`,
        JSON.stringify(value)
      );
      return true;
    } catch (error) {
      console.error("Error setting item:", error);
    }
  },

  async getItem(key = "") {
    try {
      const value = await AsyncStorage.getItem(`${STORAGE_KEY}:${key}`);

      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error getting item:", error);
    }
  },

  async removeItem(key = "") {
    try {
      await AsyncStorage.removeItem(`${STORAGE_KEY}:${key}`);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  },

  async clearStorage() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  },
};

export default storage;
