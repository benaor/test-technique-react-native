import React from "react";
import { View, Text } from "react-native";
import tw from "../components/tailwind";
import { useGalleryStore } from "../hooks/useGalleryStore";
import PhotoList from "../components/PhotoList";

const Gallery: React.FC = () => {
  const photos = useGalleryStore((state) => state.photos);

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      {photos.length < 1 && <Text>Votre gallerie est vide</Text>}
      <PhotoList />
    </View>
  );
};

export default Gallery;
