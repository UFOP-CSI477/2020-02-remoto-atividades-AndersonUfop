import { inject, injectable } from "tsyringe";

import { IHotelsImagesRepository } from "../repositories/IHotelsImagesRepository";

interface IRequest {
  hotel_id: string;
  images_name: string[];
}

@injectable()
class UploadHotelImagesService {
  constructor(
    @inject("HotelsImagesRepository")
    private hotelsImagesRepository: IHotelsImagesRepository
  ) {}

  async execute({ hotel_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.hotelsImagesRepository.create(hotel_id, image);
    });
  }
}

export { UploadHotelImagesService };
