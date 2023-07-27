import { Image, View } from "react-native";
import tw from "../../components/tailwind";
import { useLocalSearchParams } from "expo-router";
import { useGalleryStore } from "../../hooks/useGalleryStore";
import { useMemo } from "react";

const fullScreenPhoto: React.FC = () => {
  const photos = useGalleryStore((state) => state.photos);

  const params = useLocalSearchParams();
  const id = params.id;

  // TODO refactor Move this into the core
  // Should be like an useCase in the store
  const photo = useMemo(() => {
    return photos.find((photo) => photo.getTitle() === id);
  }, [photos, id]);

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      {photo && (
        <Image
          style={tw`w-100 h-100`}
          source={{ uri: photo.getImageData(), width: 300, height: 200 }}
        />
      )}
    </View>
  );
};

export default fullScreenPhoto;
