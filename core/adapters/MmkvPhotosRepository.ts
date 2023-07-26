import { MMKV } from "react-native-mmkv";
import { PhotosRepository } from "../domain/gateways/photosRepository";
import { Photo } from "../domain/entities/Photo";

export class MmkvPhotosRepository implements PhotosRepository {
  private storageKey = "photos";
  private storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  async save(photo: Photo): Promise<void> {
    const existingPhotos = await this.getAllPhotos();
    existingPhotos.push(photo);
    this.storage.set(this.storageKey, JSON.stringify(existingPhotos));
  }

  async getAllPhotos(): Promise<Photo[]> {
    const storedPhotosString = this.storage.getString(this.storageKey);

    const storedPhotosParsed: Array<{ title: string; imageData: string }> =
      storedPhotosString ? JSON.parse(storedPhotosString) : [];

    return storedPhotosParsed.map((p) => new Photo(p.title, p.imageData));
  }

  async deletePhoto(photo: Photo): Promise<void> {
    const existingPhotos = await this.getAllPhotos();
    const updatedPhotos = existingPhotos.filter(
      (p) =>
        p.getTitle() !== photo.getTitle() &&
        p.getImageData() !== photo.getImageData()
    );
    this.storage.set(this.storageKey, JSON.stringify(updatedPhotos));
  }
}
