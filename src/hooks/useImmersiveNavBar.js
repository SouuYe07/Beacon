import { useEffect, useRef } from "react";
import { AppState, Platform } from "react-native";
import {
  NavigationBar,
  addVisibilityListener,
  getVisibilityAsync,
} from "expo-navigation-bar";

const HIDE_DELAY_MS = 2000;

function hideNavBar() {
  try {
    NavigationBar.setHidden(true);
  } catch {
    // ignored in unsupported environments
  }
}

/**
 * Hides Android system nav bar (home/back/recents).
 * When the user reveals it, hide again after a short delay.
 */
export default function useImmersiveNavBar() {
  const hideTimer = useRef(null);

  useEffect(() => {
    if (Platform.OS !== "android") return;

    hideNavBar();

    const scheduleHide = () => {
      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(hideNavBar, HIDE_DELAY_MS);
    };

    const visibilitySub = addVisibilityListener(({ visibility }) => {
      if (visibility === "visible") scheduleHide();
    });

    // Backup: some Expo Go builds don't emit the listener reliably
    const poll = setInterval(async () => {
      try {
        const visibility = await getVisibilityAsync();
        if (visibility === "visible") scheduleHide();
      } catch {
        // ignore
      }
    }, 750);

    const appStateSub = AppState.addEventListener("change", (state) => {
      if (state === "active") hideNavBar();
    });

    return () => {
      clearTimeout(hideTimer.current);
      clearInterval(poll);
      visibilitySub.remove();
      appStateSub.remove();
    };
  }, []);
}
