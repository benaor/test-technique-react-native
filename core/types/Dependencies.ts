import { PhotosRepository } from "../domain/gateways/photosRepository";

export type Dependencies = {
  photosRepository: PhotosRepository;
};
