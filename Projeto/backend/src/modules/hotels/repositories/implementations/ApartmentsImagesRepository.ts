import { getRepository, Repository } from "typeorm";

import { ApartmentImage } from "../../entities/ApartmentImage";
import { IApartmentsImagesRepository } from "../IApartmentsImagesRepository";

class ApartmentsImagesRepository implements IApartmentsImagesRepository {
  private repository: Repository<ApartmentImage>;

  constructor() {
    this.repository = getRepository(ApartmentImage);
  }

  async create(
    apartment_id: string,
    image_name: string
  ): Promise<ApartmentImage> {
    const apartmentImage = this.repository.create({
      apartment_id,
      image_name,
    });

    await this.repository.save(apartmentImage);

    return apartmentImage;
  }
}

export { ApartmentsImagesRepository };
