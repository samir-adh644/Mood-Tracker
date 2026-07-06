import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const cameraRef = useRef<CameraView>(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePhoto = async () => {
    // Guard clause: Make sure the camera is available and not already taking a picture
    if (!cameraRef.current || isCapturing) return;

    try {
      setIsCapturing(true);

      // Options for compression and quality
      const options = {
        quality: 0.8, // 0 to 1 (0.8 keeps it sharp but drops file size)
        skipProcessing: false, // Ensures the image orientation updates correctly
      };

      // The actual snapshot engine
      const photo = await cameraRef.current.takePictureAsync(options);

      // This is your captured image object
      console.log("Photo captured details:", photo);
      // photo.uri looks like: "file:///var/mobile/Containers/Data/Application/.../Camera/XYZ.jpg"

      // ---> DO SOMETHING WITH THE PHOTO HERE <---
      // Example: saveToGallery(photo.uri) or setPhotoPreview(photo.uri)
    } catch (error) {
      console.error("Failed to snap photo:", error);
    } finally {
      setIsCapturing(false); // Re-enable the button
    }
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Cam</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text} onPress={takePhoto} disabled={isCapturing}>
            Click Photo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 64,
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 64,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    backgroundColor: "yellow",
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    padding: 4,
    height: 40,
    borderRadius: 4,
  },
});
