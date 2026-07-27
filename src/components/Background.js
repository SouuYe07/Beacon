import { Image, useWindowDimensions } from 'react-native';
import BackgroundPng from "../../assets/background.png";

export default function Background() {
  const { width, height } = useWindowDimensions();

  return (
    <Image
      source={BackgroundPng}
      style={{ width, height }}
      className="absolute inset-0 w-full h-full -z-10"
      resizeMode="cover"
    />
  );
}

