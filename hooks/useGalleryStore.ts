import { createGalleryStore } from "../core/GalleryStore";
import { InMemoryPhotosRepository } from "../core/adapters/InMemoryPhotosRepository";
import { Dependencies } from "../core/types/Dependencies";

const ProdDependencies: Dependencies = {
  photosRepository: new InMemoryPhotosRepository(),
};

export const useGalleryStore = createGalleryStore(ProdDependencies);
