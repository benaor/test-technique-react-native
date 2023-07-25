import { Photo } from "../../core/domain/entities/Photo";

describe("Photo", () => {
  const title = "Title";
  const imageData = "ImageData";

  let photo: Photo;

  beforeEach(() => {
    photo = new Photo(title, imageData);
  });

  test("should return the correct title", () => {
    expect(photo.getTitle()).toBe(title);
  });

  test("should return the correct imageData", () => {
    expect(photo.getImageData()).toBe(imageData);
  });
});
