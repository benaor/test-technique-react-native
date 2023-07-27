import { Alert, Image, Text, View } from "react-native";
import { Photo } from "../core/domain/entities/Photo";
import tw from "./tailwind";
import { useGalleryStore } from "../hooks/useGalleryStore";
import { Link } from "expo-router";

type PhotoMiniatureProps = {
  photo: Photo;
};

const PhotoMiniature: React.FC<PhotoMiniatureProps> = ({ photo }) => {
  const deletePhoto = useGalleryStore((state) => state.deletePhotoFromGallery);

  const handleDelete = async (photo: Photo) => {
    await deletePhoto(photo);
    Alert.alert("Succès", "Photo supprimée");
  };

  return (
    <View key={photo.getTitle()} style={tw`flex-column justify-center`}>
      <Text style={tw`text-xl`}>{photo.getTitle()}</Text>

      <Link
        href={{
          pathname: "/photo/[id]",
          params: { id: photo.getTitle() },
        }}
      >
        <Image
          source={{ uri: photo.getImageData(), width: 100, height: 100 }}
        />
      </Link>
      <Text style={tw`text-md`} onPress={() => handleDelete(photo)}>
        supprimer
      </Text>
    </View>
  );
};

export default PhotoMiniature;
