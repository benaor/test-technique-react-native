import { Camera } from "expo-camera";
import { View, Alert, Text, Button } from "react-native";
import { useRef } from "react";
import { useCameraPermission } from "../hooks/useCameraPermisssion";
import tw from "./tailwind";

type AppCameraProps = {
  setPhoto: (photo: string) => void;
};

const AppCamera: React.FC<AppCameraProps> = ({ setPhoto }) => {
  const cameraRef = useRef<Camera | null>(null);

  const permission = useCameraPermission();

  const handleTakePhoto = async () => {
    if (!cameraRef.current) return Alert.alert("Erreur", "Camera non trouvée");

    const photoData = await cameraRef.current.takePictureAsync();

    if (!photoData || !photoData.uri)
      return Alert.alert("Erreur", "La photo n'a pas pu être prise");

    setPhoto(photoData.uri);
  };

  if (!permission)
    return (
      <View style={tw`flex-1 flex-row mx-auto mt-150`}>
        <Text style={tw`text-center`}>
          Vous devez autoriser l'accès à la camera
        </Text>
      </View>
    );

  return (
    <Camera ref={cameraRef} style={tw`flex-1 w-100`}>
      <View style={tw`flex-1 flex-row mx-auto mt-150`}>
        <Button title="Prendre une photo" onPress={handleTakePhoto} />
      </View>
    </Camera>
  );
};

export default AppCamera;
