import { inject, injectable } from "tsyringe";

import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

import { IHotelsImagesRepository } from "../repositories/IHotelsImagesRepository";

interface IRequest {
  hotel_id: string;
  images_name: string[];
}

@injectable()
class UploadHotelImagesService {
  constructor(
    @inject("HotelsImagesRepository")
    private hotelsImagesRepository: IHotelsImagesRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ hotel_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.hotelsImagesRepository.create(hotel_id, image);
      await this.storageProvider.save(image, "hotel");
    });
  }
}

export { UploadHotelImagesService };
