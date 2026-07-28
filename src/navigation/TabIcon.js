import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TAB_BAR } from "./tabConfig";

/**
 * Renders tab icons. Prefers Iconify ID later; uses vector fallbacks for now.
 * When you paste Iconify IDs into tabConfig, wire react-native-iconify here.
 */
export default function TabIcon({ tab, focused }) {
  const color = focused ? TAB_BAR.activeColor : TAB_BAR.inactiveColor;
  const size = TAB_BAR.iconSize;
  const { name } = tab.fallback;

  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}
