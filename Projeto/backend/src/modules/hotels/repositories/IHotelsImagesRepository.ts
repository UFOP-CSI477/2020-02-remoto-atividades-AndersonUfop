import { HotelImage } from "../infra/entities/HotelImage";

interface IHotelsImagesRepository {
  create(hotel_id: string, image_name: string): Promise<HotelImage>;
}

export { IHotelsImagesRepository };
