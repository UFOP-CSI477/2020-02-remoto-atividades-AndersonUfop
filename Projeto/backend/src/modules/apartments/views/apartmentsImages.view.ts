import { ApartmentImage } from "../infra/entities/ApartmentImage";

export default {
  render(image: ApartmentImage) {
    return {
      id: image.id,
      image_name: `http://localhost:3333/images/apartment/${image.image_name}`,
    };
  },

  renderMany(images: ApartmentImage[]) {
    return images.map((image) => this.render(image));
  },
};
