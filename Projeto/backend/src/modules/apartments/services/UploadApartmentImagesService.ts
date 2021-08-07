import { inject, injectable } from "tsyringe";

import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

import { IApartmentsImagesRepository } from "../repositories/IApartmentsImagesRepository";

interface IRequest {
  apartment_id: string;
  images_name: string[];
}

@injectable()
class UploadApartmentImagesService {
  constructor(
    @inject("ApartmentsImagesRepository")
    private apartmentsImagesRepository: IApartmentsImagesRepository,

    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ apartment_id, images_name }: IRequest): Promise<void> {
    images_name.map(async (image) => {
      await this.apartmentsImagesRepository.create(apartment_id, image);
      await this.storageProvider.save(image, "apartment");
    });
  }
}

export { UploadApartmentImagesService };
