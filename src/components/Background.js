import { Image, StyleSheet, Dimensions } from "react-native";
import BackgroundPng from "../../assets/background.png";

export default function Background() {
  const { width, height } = Dimensions.get("screen");

  return (
    <Image
      source={BackgroundPng}
      resizeMode="cover"
      pointerEvents="none"
      style={[styles.image, { width, height }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
});
