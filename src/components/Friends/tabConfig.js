/**
 * Role → bottom tabs. Replace `iconify` values with exact IDs from Figma
 * (Iconify plugin → copy name, e.g. "mdi:calendar-outline").
 *
 * Until Iconify IDs are filled, `fallback` uses @expo/vector-icons names.
 */

export const TAB_BAR = {
  activeColor: "#3B82F6",
  inactiveColor: "#4B5563",
  pillColor: "rgba(255, 255, 255, 0.55)",
  barTint: "rgba(255, 255, 255, 0.35)",
  iconSize: 26,
};

/** @typedef {'patient' | 'dietician' | 'psychiatrist' | 'friend' | 'family'} UserRole */

/**
 * @param {UserRole} role
 */
export function getTabsForRole(role) {
  switch (role) {
    case "patient":
      return [
        {
          name: "Profile",
          iconify: "", // e.g. game-icons:owl
          fallback: { family: "MaterialCommunityIcons", name: "owl" },
        },
        {
          name: "Calendar",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "calendar-outline" },
        },
        {
          name: "Group",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "account-group-outline" },
        },
        {
          name: "PostFood",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "tennis" },
        },
        {
          name: "Messages",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "message-outline" },
        },
      ];
    case "dietician":
    case "psychiatrist":
      return [
        {
          name: "Patients",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "owl" },
        },
        {
          name: "Calendar",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "calendar-outline" },
        },
        {
          name: "Schedule",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "pencil-outline" },
        },
        {
          name: "Messages",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "message-outline" },
        },
      ];
    case "friend":
      return [
        {
          name: "Profile",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "panda" },
        },
        {
          name: "Calendar",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "calendar-outline" },
        },
        {
          name: "Messages",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "message-outline" },
        },
      ];
    case "family":
      return [
        {
          name: "Profile",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "rabbit" },
        },
        {
          name: "Calendar",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "calendar-outline" },
        },
        {
          name: "Messages",
          iconify: "",
          fallback: { family: "MaterialCommunityIcons", name: "message-outline" },
        },
      ];
    default:
      return getTabsForRole("patient");
  }
}
