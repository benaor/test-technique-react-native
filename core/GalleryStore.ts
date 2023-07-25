import { create } from "zustand";
import { addPhotoToGallery } from "./domain/useCases/AddPhotoToGallery";
import { Dependencies } from "./types/Dependencies";
import { Photo } from "./domain/entities/Photo";
import { viewAllPhotoInGallery } from "./domain/useCases/ViewAllPhotoInGallery";
import { deletePhotoFromGallery } from "./domain/useCases/DeletePhotoFromGallery";

export interface GalleryState {
  photos: Array<Photo>;
  addPhotoToGallery: (photo: Photo) => Promise<void>;
  viewAllPhotoInGallery: () => Promise<void>;
  deletePhotoFromGallery: (photo: Photo) => Promise<void>;
}

export const createGalleryStore = ({ photosRepository }: Dependencies) =>
  create<GalleryState>((set) => ({
    photos: [],
    addPhotoToGallery: addPhotoToGallery(photosRepository)(set),
    viewAllPhotoInGallery: viewAllPhotoInGallery(photosRepository)(set),
    deletePhotoFromGallery: deletePhotoFromGallery(photosRepository)(set),
  }));
