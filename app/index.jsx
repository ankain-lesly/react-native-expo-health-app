import storage from "@/lib/local-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const OnboardScreen = () => {
  const checkedUserLogged = async () => {
    const isLogged = await storage.getItem("isLogged");
    CODE: console.log(isLogged, typeof isLogged);

    if (isLogged != "true") {
      console.log("ROUTE: ONBOARD");
      router.replace("/onboarding");
    } else {
      console.log("ROUTE: HOME");
      router.replace("/home");
    }

    SplashScreen.hideAsync();
  };

  useEffect(() => {
    checkedUserLogged();
  }, []);

  return null;
};

export default OnboardScreen;
