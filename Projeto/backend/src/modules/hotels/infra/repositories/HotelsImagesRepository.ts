import { HotelImage } from "@modules/hotels/infra/entities/HotelImage";
import { IHotelsImagesRepository } from "@modules/hotels/repositories/IHotelsImagesRepository";
import { getRepository, Repository } from "typeorm";

class HotelsImagesRepository implements IHotelsImagesRepository {
  private repository: Repository<HotelImage>;

  constructor() {
    this.repository = getRepository(HotelImage);
  }

  async create(hotel_id: string, image_name: string): Promise<HotelImage> {
    const hotelImage = this.repository.create({
      hotel_id,
      image_name,
    });

    await this.repository.save(hotelImage);

    return hotelImage;
  }

  async listImagesByHotels(hotel_id: string): Promise<HotelImage[]> {
    const hotels = await this.repository.find({
      where: { hotel_id },
    });

    return hotels;
  }

  async findById(id: string): Promise<HotelImage> {
    const image = await this.repository.findOne({ id });

    return image;
  }
}

export { HotelsImagesRepository };
