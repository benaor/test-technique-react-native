import { InMemoryPhotosRepository } from "../../core/adapters/InMemoryPhotosRepository";
import { Dependencies } from "../../core/types/Dependencies";

export const TestDependencies: Dependencies = {
  photosRepository: new InMemoryPhotosRepository(),
};
