import { View, Pressable, StyleSheet, Platform } from "react-native";
import { BlurView } from "expo-blur";
import TabIcon from "./TabIcon";
import { TAB_BAR } from "./tabConfig";

export default function GlassTabBar({ state, descriptors, navigation }) {
  return (
    <View style={[styles.wrap, { paddingBottom: 12 }]}>
      <View style={styles.barShadow}>
        <BlurView
          intensity={40}
          tint="light"
          style={styles.bar}
          {...(Platform.OS === "android" ? { experimentalBlurMethod: "dimezisBlurView" } : null)}
        >
          <View style={[StyleSheet.absoluteFill, styles.barTint]} />
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const focused = state.index === index;
            const tab = options.tabConfig;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                accessibilityState={focused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel ?? route.name}
                onPress={onPress}
                style={styles.item}
              >
                <View style={[styles.pill, focused && styles.pillActive]}>
                  <TabIcon tab={tab} focused={focused} />
                </View>
              </Pressable>
            );
          })}
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  barShadow: {
    borderRadius: 999,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 999,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.55)",
  },
  barTint: {
    backgroundColor: TAB_BAR.barTint,
  },
  item: {
    paddingHorizontal: 6,
  },
  pill: {
    minWidth: 48,
    height: 40,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  pillActive: {
    backgroundColor: TAB_BAR.pillColor,
  },
});
