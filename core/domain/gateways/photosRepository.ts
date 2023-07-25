import { Photo } from "../entities/Photo";

export interface PhotosRepository {
  save(photo: Photo): Promise<void>;
  getAllPhotos(): Promise<Photo[]>;
  deletePhoto(photo: Photo): Promise<void>;
}
