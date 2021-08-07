import { Apartment } from "../infra/entities/Apartment";
import apartmentsImagesView from "./apartmentsImages.view";

export default {
  render(apartment: Apartment) {
    return {
      id: apartment.id,
      hotel_id: apartment.hotel_id,
      room_number: apartment.room_number,
      price: apartment.price,
      suite: apartment.suite,
      tv: apartment.tv,
      air_conditioning: apartment.air_conditioning,
      room_type: apartment.room_type,
      availability: apartment.availability,
      images: apartmentsImagesView.renderMany(apartment.images),
    };
  },

  renderMany(apartments: Apartment[]) {
    return apartments.map((apartment) => this.render(apartment));
  },
};
