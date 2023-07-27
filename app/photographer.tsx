import tw from "../components/tailwind";
import AddPhotoForm from "../components/AddPhotoForm";
import AppCamera from "../components/AppCamera";
import { useState } from "react";
import { View } from "react-native";

const Photographer: React.FC = () => {
  const [photo, setPhoto] = useState<string>("");

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      {photo ? (
        <AddPhotoForm photo={photo} />
      ) : (
        <AppCamera setPhoto={setPhoto} />
      )}
    </View>
  );
};

export default Photographer;
