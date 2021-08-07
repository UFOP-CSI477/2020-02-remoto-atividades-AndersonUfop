import { HotelImage } from "../infra/entities/HotelImage";

export default {
  render(image: HotelImage) {
    return {
      id: image.id,
      image_name: `http://localhost:3333/images/hotel/${image.image_name}`,
    };
  },

  renderMany(images: HotelImage[]) {
    return images.map((image) => this.render(image));
  },
};
