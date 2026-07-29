import { useMemo } from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 932;
/** Tab bar bottom:35 + height:70 + breathing room */
const TAB_CLEARANCE = 35 + 70 + 20;

export default function useFoodLayout() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const scale = useMemo(
    () => Math.min(width / DESIGN_WIDTH, height / DESIGN_HEIGHT, 1.15),
    [width, height]
  );
  const scaleX = width / DESIGN_WIDTH;
  const s = (n) => n * scale;
  const sx = (n) => n * scaleX;

  const topPad = insets.top + s(36);
  const tabClearance = s(TAB_CLEARANCE);

  return {
    insets: { ...insets, bottom: 0 },
    s,
    sx,
    width,
    height,
    topPad,
    tabClearance,
  };
}
