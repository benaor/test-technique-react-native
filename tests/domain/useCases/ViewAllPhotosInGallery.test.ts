import { createGalleryStore } from "../../../core/GalleryStore";
import { InMemoryPhotosRepository } from "../../../core/adapters/InMemoryPhotosRepository";
import { Photo } from "../../../core/domain/entities/Photo";
import { AppGalleryState } from "../../../core/types/AppState";
import { TestDependencies } from "../../builder/TestsDependencies";

let testGalleryStore: AppGalleryState;
let inMemoryPhotosRepository: InMemoryPhotosRepository;

describe("ViewAllPhotosInGallery UseCase", () => {
  beforeEach(() => {
    inMemoryPhotosRepository = new InMemoryPhotosRepository();
    testGalleryStore = createGalleryStore({
      ...TestDependencies,
      photosRepository: inMemoryPhotosRepository,
    });
  });

  test("Should return an empty gallery", async () => {
    await testGalleryStore.getState().viewAllPhotoInGallery();

    const gallery = testGalleryStore.getState().photos;
    expect(gallery.length).toBe(0);
  });

  test("Should return Gallery with 2 elements", async () => {
    const photo1 = new Photo("a", "b");
    const photo2 = new Photo("c", "d");
    inMemoryPhotosRepository.photos = [photo1, photo2];

    await testGalleryStore.getState().viewAllPhotoInGallery();

    const gallery = testGalleryStore.getState().photos;
    expect(gallery.length).toBe(2);

    expect(gallery).toContainEqual(photo1);
    expect(gallery).toContainEqual(photo2);
  });
});
