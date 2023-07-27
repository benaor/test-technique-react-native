import { router } from "expo-router";
import { useCallback, useState } from "react";
import { Button, Image, TextInput } from "react-native";
import { Photo } from "../core/domain/entities/Photo";
import { useGalleryStore } from "../hooks/useGalleryStore";
import tw from "./tailwind";

type AddPhotoFormProps = {
  photo: string;
};

const AddPhotoForm: React.FC<AddPhotoFormProps> = ({ photo }) => {
  const addToGallery = useGalleryStore((state) => state.addPhotoToGallery);

  const [title, setTitle] = useState<string>("");

  const handleSubmit = useCallback(async () => {
    await addToGallery(new Photo(title, photo));
    router.push("/gallery");
  }, [title, photo]);

  return (
    <>
      <Image source={{ uri: photo, width: 300, height: 200 }} />
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Titre de la photo"
        style={tw`border p-2 w-2/3 my-2 rounded`}
      />
      <Button title="Ajouter à la galerie" onPress={handleSubmit} />
    </>
  );
};

export default AddPhotoForm;
