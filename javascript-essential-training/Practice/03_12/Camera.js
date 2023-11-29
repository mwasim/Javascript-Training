class Camera {
  constructor(brand, model, year, format, lens, filmType) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.format = format;
    this.lens = lens;
    this.filmType = filmType;
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  cameraAge() {
    return this.getCurrentYear() - this.year;
  }
}

export default Camera;
