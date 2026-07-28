import "./global.css";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import SelectUser from "./src/navigation/SelectUser";

export default function App() {
  const [loaded, error] = useFonts({
    "Geom-Light": require("./assets/Fonts/Geom-Light.ttf"),
    "Geom-LightItalic": require("./assets/Fonts/Geom-LightItalic.ttf"),
    "Geom-Regular": require("./assets/Fonts/Geom-Regular.ttf"),
    "Geom-Italic": require("./assets/Fonts/Geom-Italic.ttf"),
    "Geom-Medium": require("./assets/Fonts/Geom-Medium.ttf"),
    "Geom-MediumItalic": require("./assets/Fonts/Geom-MediumItalic.ttf"),
    "Geom-SemiBold": require("./assets/Fonts/Geom-SemiBold.ttf"),
    "Geom-SemiBoldItalic": require("./assets/Fonts/Geom-SemiBoldItalic.ttf"),
    "Geom-Bold": require("./assets/Fonts/Geom-Bold.ttf"),
    "Geom-BoldItalic": require("./assets/Fonts/Geom-BoldItalic.ttf"),
    "Geom-ExtraBold": require("./assets/Fonts/Geom-ExtraBold.ttf"),
    "Geom-ExtraBoldItalic": require("./assets/Fonts/Geom-ExtraBoldItalic.ttf"),
    "Geom-Black": require("./assets/Fonts/Geom-Black.ttf"),
    "Geom-BlackItalic": require("./assets/Fonts/Geom-BlackItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <SelectUser />;
}
