import { useMemo, useRef } from "react";
import { Dimensions, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/** Figma / design frame for Chats */
const DESIGN_WIDTH = 430;
const DESIGN_HEIGHT = 932;

export default function useChatsLayout() {
  const insets = useSafeAreaInsets();
  const { width: liveWidth } = useWindowDimensions();

  // Lock frame size so the soft keyboard can't rescale / compress the UI
  const frameRef = useRef(null);
  if (!frameRef.current) {
    const screen = Dimensions.get("screen");
    frameRef.current = { width: screen.width, height: screen.height };
  }

  const width = liveWidth || frameRef.current.width;
  const height = frameRef.current.height;

  const scale = useMemo(
    () => Math.min(width / DESIGN_WIDTH, height / DESIGN_HEIGHT, 1.15),
    [width, height]
  );
  const scaleX = width / DESIGN_WIDTH;
  const s = (n) => n * scale;
  const sx = (n) => n * scaleX;

  // Ignore bottom inset so revealing the system nav bar doesn't resize layout
  const stableInsets = { ...insets, bottom: 0 };

  const sidePad = Math.max(sx(25), 12);
  const contentWidth = Math.min(sx(380), width - sidePad * 2);

  return {
    insets: stableInsets,
    scale,
    scaleX,
    s,
    sx,
    styles: {
      sidePad,
      contentWidth,
      titleSize: s(36),
      titleGap: s(14),
      sectionGap: s(14),
      searchHeight: s(50),
      searchRadius: s(30),
      searchFont: s(20),
      searchIcon: s(28.8),
      searchPadX: s(16),
      searchIconGap: s(10),
      activeHeight: s(140),
      activeRadius: s(30),
      activeHeaderToUsersGap: s(10),
      messagesRadius: s(30),
      messagesPad: s(16),
      sectionTitleSize: s(24),
      seeAllSize: s(13),
      // Same avatar size in Active row and Messages list (matches SVG artboard)
      avatarSize: s(55),
      nextIconSize: s(20),
      // Tab bar sits at bottom:35 with height:70 → leave gap above it
      tabClearance: s(35 + 70 + 20),
      // Extra space above the Chats header (on top of safe-area)
      topPad: s(28),
    },
  };
}
