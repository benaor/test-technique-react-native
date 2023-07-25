import { GalleryState } from "../../GalleryStore";
import { SetState } from "../../types/SetState";
import { Photo } from "../entities/Photo";
import { PhotosRepository } from "../gateways/photosRepository";

const deletePhotoFromRepository = async (
  photosRepo: PhotosRepository,
  photo: Photo
) => await photosRepo.deletePhoto(photo);

const deletePhotoFromStore = (set: SetState<GalleryState>, photo: Photo) =>
  set((state) => ({
    ...state,
    photos: state.photos.filter((p) => p !== photo),
  }));

export const deletePhotoFromGallery =
  (photosRepo: PhotosRepository) =>
  (set: SetState<GalleryState>) =>
  async (photo: Photo) => {
    await deletePhotoFromRepository(photosRepo, photo);
    deletePhotoFromStore(set, photo);
  };
