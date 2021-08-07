import { HotelImage } from "../infra/entities/HotelImage";

interface IHotelsImagesRepository {
  create(hotel_id: string, image_name: string): Promise<HotelImage>;
  listImagesByHotels(hotel_id: string): Promise<HotelImage[]>;
  findById(id: string): Promise<HotelImage>;
}

export { IHotelsImagesRepository };
