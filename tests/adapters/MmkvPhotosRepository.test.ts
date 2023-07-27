import { MmkvPhotosRepository } from "../../core/adapters/MmkvPhotosRepository";
import { Photo } from "../../core/domain/entities/Photo";

describe("MmkvPhotosRepository", () => {
  it("should return an empty array", async () => {
    const mmkvPhotosRepository = new MmkvPhotosRepository();

    const photos = await mmkvPhotosRepository.getAllPhotos();

    expect(photos).toEqual([]);
  });

  it("should return an array with one photo", async () => {
    const photo = new Photo("a", "b");
    const mmkvPhotosRepository = new MmkvPhotosRepository();

    await mmkvPhotosRepository.save(photo);
    const photos = await mmkvPhotosRepository.getAllPhotos();

    expect(photos).toEqual([photo]);
  });

  it("should return an array with two photos", async () => {
    const photo1 = new Photo("a", "b");
    const photo2 = new Photo("c", "d");
    const mmkvPhotosRepository = new MmkvPhotosRepository();

    await mmkvPhotosRepository.save(photo1);
    await mmkvPhotosRepository.save(photo2);
    const photos = await mmkvPhotosRepository.getAllPhotos();

    expect(photos).toContainEqual(photo1);
    expect(photos).toContainEqual(photo2);
  });

  it("should return an array with one photo after deleting one", async () => {
    const photo1 = new Photo("a", "b");
    const photo2 = new Photo("c", "d");

    const mmkvPhotosRepository = new MmkvPhotosRepository();

    await mmkvPhotosRepository.save(photo1);
    await mmkvPhotosRepository.save(photo2);
    await mmkvPhotosRepository.deletePhoto(photo2);

    const photos = await mmkvPhotosRepository.getAllPhotos();

    expect(photos).toContainEqual(photo1);
    expect(photos).not.toContainEqual(photo2);
  });
});
