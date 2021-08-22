import { Hotel } from "../infra/entities/Hotel";
import hotelImagesView from "./hotelsImages.view";

export default {
  render(hotel: Hotel) {
    return {
      id: hotel.id,
      name_hotel: hotel.name_hotel,
      latitude: hotel.latitude,
      longitude: hotel.longitude,
      localization: hotel.localization,
      email: hotel.email,
      telephone: hotel.telephone,
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
