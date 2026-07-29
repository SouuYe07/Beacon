import { useRef, useState } from "react";
import { View, Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CameraView, useCameraPermissions } from "expo-camera";
import useFoodLayout from "../../hooks/useFoodLayout";
import BackIcon from "../../../assets/Icons/food-camera-back.svg";
import ShutterIcon from "../../../assets/Icons/food-shutter.svg";

export default function FoodCameraScreen() {
  const navigation = useNavigation();
  const { insets, s } = useFoodLayout();
  const cameraRef = useRef(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [capturing, setCapturing] = useState(false);

  const backSize = s(49);
  const shutterSize = s(81);

  const takePicture = async () => {
    if (!cameraRef.current || capturing) return;
    try {
      setCapturing(true);
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.85,
        skipProcessing: true,
      });
      if (photo?.uri) {
        navigation.replace("FoodReview", { uri: photo.uri });
      }
    } finally {
      setCapturing(false);
    }
  };

  if (!permission) {
    return <View style={styles.fill} />;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.fill, styles.center, { paddingTop: insets.top }]}>
        <Text
          className="font-geom-medium"
          style={{ fontSize: s(18), color: "#262626", textAlign: "center", marginBottom: s(16) }}
        >
          Camera access is needed to post food photos.
        </Text>
        <Pressable
          onPress={requestPermission}
          style={{
            backgroundColor: "#32759F",
            paddingHorizontal: s(20),
            paddingVertical: s(10),
            borderRadius: s(10),
            marginBottom: s(12),
          }}
        >
          <Text className="font-geom-medium text-white" style={{ fontSize: s(16) }}>
            Allow camera
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()} hitSlop={10}>
          <Text className="font-geom-regular" style={{ fontSize: s(15), color: "#32759F" }}>
            Go back
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.fill}>
      <CameraView ref={cameraRef} style={StyleSheet.absoluteFill} facing="back" />

      <View
        pointerEvents="box-none"
        style={[styles.fill, { paddingTop: insets.top + s(24) }]}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          style={{ marginLeft: s(28), alignSelf: "flex-start" }}
        >
          <BackIcon width={backSize} height={backSize} />
        </Pressable>

        <View style={{ flex: 1 }} />

        <View style={{ alignItems: "center", paddingBottom: s(40) }}>
          <Pressable
            onPress={takePicture}
            disabled={capturing}
            accessibilityRole="button"
            accessibilityLabel="Take picture"
          >
            {capturing ? (
              <ActivityIndicator color="#FFFFFF" size="large" />
            ) : (
              <ShutterIcon width={shutterSize} height={shutterSize} />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fill: { flex: 1, backgroundColor: "#000000" },
  center: { alignItems: "center", justifyContent: "center", paddingHorizontal: 24 },
});
