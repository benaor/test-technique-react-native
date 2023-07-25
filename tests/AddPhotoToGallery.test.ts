import { createGalleryStore } from "../core/GalleryStore";
import { InMemoryPhotosRepository } from "../core/adapters/InMemoryPhotosRepository";
import { Photo } from "../core/domain/entities/Photo";
import { AppGalleryState } from "../core/types/AppState";
import { TestDependencies } from "./builder/TestsDependencies";

let testGalleryStore: AppGalleryState;
let inMemoryPhotosRepository: InMemoryPhotosRepository;

describe("AddPhotoToGallery UseCase", () => {
  beforeEach(() => {
    inMemoryPhotosRepository = new InMemoryPhotosRepository();
    testGalleryStore = createGalleryStore({
      ...TestDependencies,
      photosRepository: inMemoryPhotosRepository,
    });
  });

  test("Gallery should be empty", async () => {
    const storeGallery = testGalleryStore.getState().photos;
    expect(storeGallery.length).toBe(0);

    const galleryFromRepository = await inMemoryPhotosRepository.getAllPhotos();
    expect(galleryFromRepository.length).toEqual(0);
  });

  test("Gallery should have just one photo", async () => {
    const photo = new Photo("photoTitle", "photoData");
    await testGalleryStore.getState().addPhoto(photo);

    // In store
    const gallery = testGalleryStore.getState().photos;
    expect(gallery.length).toBe(1);

    expect(gallery[0].getTitle()).toBe("photoTitle");
    expect(gallery[0].getImageData()).toBe("photoData");

    // In repository
    const galleryFromRepository = await inMemoryPhotosRepository.getAllPhotos();

    expect(galleryFromRepository.length).toEqual(1);
    expect(galleryFromRepository[0].getTitle()).toBe("photoTitle");
    expect(galleryFromRepository[0].getImageData()).toBe("photoData");
  });
});
