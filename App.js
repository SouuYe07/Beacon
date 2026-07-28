import "./global.css";
import { useEffect, useMemo } from "react";
import { Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationBar } from "expo-navigation-bar";
import * as SystemUI from "expo-system-ui";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import useImmersiveNavBar from "./src/hooks/useImmersiveNavBar";
import SelectUser from "./src/navigation/SelectUser";
import SelectSupporter from "./src/navigation/SelectSupporter";
import FriendsHome from "./src/navigation/FriendsHome";
import Professional from "./src/navigation/professional/Professional.js";

const Stack = createNativeStackNavigator();

const stableMetrics = initialWindowMetrics
  ? {
      ...initialWindowMetrics,
      insets: { ...initialWindowMetrics.insets, bottom: 0 },
    }
  : undefined;

/** Keeps layout height stable when Android system nav bar is revealed. */
function FreezeBottomSafeArea({ children }) {
  const insets = useSafeAreaInsets();
  const value = useMemo(
    () => ({ ...insets, bottom: 0 }),
    [insets.top, insets.left, insets.right]
  );

  return (
    <SafeAreaInsetsContext.Provider value={value}>
      {children}
    </SafeAreaInsetsContext.Provider>
  );
}

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

  useImmersiveNavBar();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    if (Platform.OS === "android") {
      SystemUI.setBackgroundColorAsync("#E8F5F0").catch(() => {});
    }
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={stableMetrics}>
      <FreezeBottomSafeArea>
        {Platform.OS === "android" ? <NavigationBar hidden style="dark" /> : null}

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "#E8F5F0" },
            }}
          >
            <Stack.Screen name="SelectUser" component={SelectUser} />
            <Stack.Screen name="SelectSupporter" component={SelectSupporter} />
            <Stack.Screen name="FriendsHome" component={FriendsHome} />
            <Stack.Screen name="Professional" component={Professional} />
          </Stack.Navigator>
        </NavigationContainer>
      </FreezeBottomSafeArea>
    </SafeAreaProvider>
  );
}
