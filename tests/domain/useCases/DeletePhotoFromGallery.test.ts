import { createGalleryStore } from "../../../core/GalleryStore";
import { InMemoryPhotosRepository } from "../../../core/adapters/InMemoryPhotosRepository";
import { Photo } from "../../../core/domain/entities/Photo";
import { AppGalleryState } from "../../../core/types/AppState";
import { TestDependencies } from "../../builder/TestsDependencies";

let testGalleryStore: AppGalleryState;
let inMemoryPhotosRepository: InMemoryPhotosRepository;

const photo1 = new Photo("a", "b");
const photo2 = new Photo("c", "d");

describe("DeletePhotoFromGallery UseCase", () => {
  beforeEach(() => {
    inMemoryPhotosRepository = new InMemoryPhotosRepository();

    testGalleryStore = createGalleryStore({
      ...TestDependencies,
      photosRepository: inMemoryPhotosRepository,
    });

    inMemoryPhotosRepository.photos = [photo1, photo2];
    testGalleryStore.setState((state) => ({
      ...state,
      photos: [photo1, photo2],
    }));
  });

  test("Test should be correcly initialized", async () => {
    let gallery = testGalleryStore.getState().photos;

    expect(gallery.length).toBe(2);
    expect(gallery).toContainEqual(photo1);
    expect(gallery).toContainEqual(photo2);
  });

  test("Should return Gallery without photo2 elements", async () => {
    await testGalleryStore.getState().deletePhotoFromGallery(photo2);

    // In store
    let gallery = testGalleryStore.getState().photos;

    expect(gallery.length).toBe(1);
    expect(gallery).toContainEqual(photo1);
    expect(gallery).not.toContainEqual(photo2);

    // In repository
    let galleryFromRepository = inMemoryPhotosRepository.photos;

    expect(galleryFromRepository.length).toBe(1);
    expect(galleryFromRepository).toContainEqual(photo1);
    expect(galleryFromRepository).not.toContainEqual(photo2);
  });
});
