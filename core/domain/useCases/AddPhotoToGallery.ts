import { GalleryState } from "../../GalleryStore";
import { Photo } from "../entities/Photo";
import { Dependencies } from "../../types/Dependencies";
import { SetState } from "../../types/SetState";

export const addPhotoToGallery =
  (deps: Dependencies) =>
  (set: SetState<GalleryState>) =>
  async (photo: Photo) => {
    try {
      await deps.photosRepository.save(photo);

      set((state) => ({
        photos: [...state.photos, photo],
      }));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  };

/**
 I have two solutions here: 
 1 - Save the picture in repository and next update the store with the new picture.
 2 - Save the picture in repository and next get the new list of pictures from repository. 
 The first solution make it possible we don't need to get the new list of pictures from repository => performance optimization
 The second solution make it possible we can be sure that the picture was saved in repository but the execution time is longer.
**/
