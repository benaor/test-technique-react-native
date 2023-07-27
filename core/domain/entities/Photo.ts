export class Photo {
  public id: string;

  constructor(private title: string, private imageData: string) {
    this.id = imageData.substring(0, 30);
  }

  getTitle() {
    return this.title;
  }

  getImageData() {
    return this.imageData;
  }
}
