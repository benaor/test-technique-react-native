import { GalleryState } from "../../GalleryStore";
import { SetState } from "../../types/SetState";
import { Photo } from "../entities/Photo";
import { PhotosRepository } from "../gateways/photosRepository";

const getPhotosFromRepository = async (deps: PhotosRepository) =>
  await deps.getAllPhotos();

const updateStoreWithPhotos = (set: SetState<GalleryState>, photos: Photo[]) =>
  set(() => ({ photos: [...photos] }));

export const viewAllPhotoInGallery =
  (photosRepo: PhotosRepository) =>
  (set: SetState<GalleryState>) =>
  async () => {
    const photos = await getPhotosFromRepository(photosRepo);
    updateStoreWithPhotos(set, photos);
  };
