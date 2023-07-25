import { create } from "zustand";
import { addPhotoToGallery } from "./domain/useCases/AddPhotoToGallery";
import { Dependencies } from "./types/Dependencies";
import { Photo } from "./domain/entities/Photo";

export interface GalleryState {
  photos: Array<Photo>;
  addPhoto: (photo: Photo) => Promise<void>;
}

export const createGalleryStore = (deps: Dependencies) =>
  create<GalleryState>((set) => ({
    photos: [],
    addPhoto: addPhotoToGallery(deps)(set),
  }));
