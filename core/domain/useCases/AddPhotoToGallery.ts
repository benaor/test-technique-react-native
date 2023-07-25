import { GalleryState } from "../../GalleryStore";
import { Photo } from "../entities/Photo";
import { SetState } from "../../types/SetState";
import { PhotosRepository } from "../gateways/photosRepository";

const savePhotoInRepository = async (
  photosRepo: PhotosRepository,
  photo: Photo
) => await photosRepo.save(photo);

const updateStateWithPhoto = (set: SetState<GalleryState>, photo: Photo) =>
  set((state) => ({
    photos: [...state.photos, photo],
  }));

export const addPhotoToGallery =
  (photosRepo: PhotosRepository) =>
  (set: SetState<GalleryState>) =>
  async (photo: Photo) => {
    await savePhotoInRepository(photosRepo, photo);
    updateStateWithPhoto(set, photo);
  };

/**
 I have two solutions here: 
 1 - Save the picture in repository and next update the store with the new picture.
 2 - Save the picture in repository and next get the new list of pictures from repository. 
 The first solution make it possible we don't need to get the new list of pictures from repository => performance optimization
 The second solution make it possible we can be sure that the picture was saved in repository but the execution time is longer.
**/
