export class Photo {
  constructor(private title: string, private imageData: string) {}

  getTitle() {
    return this.title;
  }

  getImageData() {
    return this.imageData;
  }
}
