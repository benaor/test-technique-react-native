import { useGalleryStore } from "../hooks/useGalleryStore";
import PhotoMiniature from "./PhotoMiniature";

const PhotoList: React.FC = () => {
  const photos = useGalleryStore((state) => state.photos);

  return photos.map((photo) => <PhotoMiniature photo={photo} />);
};

export default PhotoList;
