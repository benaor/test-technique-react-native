import { Photo } from "../domain/entities/Photo";
import { PhotosRepository } from "../domain/gateways/photosRepository";

export class InMemoryPhotosRepository implements PhotosRepository {
  public photos: Photo[] = [];

  async save(photo: Photo) {
    this.photos.push(photo);
    Promise.resolve();
  }

  async getAllPhotos(): Promise<Photo[]> {
    return Promise.resolve(this.photos);
  }

  async deletePhoto(photo: Photo): Promise<void> {
    this.photos = this.photos.filter((p) => p !== photo);
    Promise.resolve();
  }
}
