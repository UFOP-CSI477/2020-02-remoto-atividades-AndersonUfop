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
}

export { HotelsImagesRepository };
