import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export default function useSelectLayout() {
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  const scale = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT, 1.1);
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  // Ignore bottom inset so revealing the system nav bar doesn't resize layout
  const stableInsets = { ...insets, bottom: 0 };

  return {
    insets: stableInsets,
    styles: {
      sidePad: clamp(width * 0.08, 20, 36),
      headingSize: clamp(32 * scale, 24, 36),
      headingLine: clamp(38 * scale, 28, 42),
      headingWidth: clamp(width * 0.62, 180, 260),
      headingGap: clamp(20 * scale, 12, 28),
      cardHeight: clamp(190 * scale, 120, 190),
      cardGap: clamp(14 * scale, 8, 16),
      cardRadius: clamp(30 * scale, 20, 30),
      cardPadRight: clamp(12 * scale, 8, 16),
      iconWidth: clamp(143 * scale, 90, 143),
      iconHeight: clamp(167 * scale, 105, 167),
      titleSize: clamp(32 * scale, 22, 34),
      titleLine: clamp(38 * scale, 26, 40),
      bodySize: clamp(14 * scale, 11, 16),
      bodyLine: clamp(16 * scale, 14, 20),
      textPadRight: clamp(20 * scale, 12, 28),
    },
  };
}
