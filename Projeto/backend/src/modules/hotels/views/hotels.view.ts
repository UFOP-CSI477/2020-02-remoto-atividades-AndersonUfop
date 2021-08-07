import { Hotel } from "../infra/entities/Hotel";
import hotelImagesView from "./hotelsImages.view";

export default {
  render(hotel: Hotel) {
    return {
      id: hotel.id,
      name_hotel: hotel.name_hotel,
      address: hotel.address,
      city: hotel.city,
      state: hotel.state,
      rooms_number: hotel.rooms_number,
      pool: hotel.pool,
      wifi: hotel.wifi,
      parking: hotel.parking,
      breakfast: hotel.breakfast,
      images: hotelImagesView.renderMany(hotel.images),
    };
  },

  renderMany(hotels: Hotel[]) {
    return hotels.map((hotel) => this.render(hotel));
  },
};
