import { inject, injectable } from "tsyringe";

import { Hotel } from "../infra/entities/Hotel";
import { IHotelsImagesRepository } from "../repositories/IHotelsImagesRepository";
import { IHotelsRepository } from "../repositories/IHotelsRepository";

interface IRequest {
  city?: string;
  pool?: string;
  wifi?: string;
  parking?: string;
  breakfast?: string;
}

@injectable()
class ListHotelsService {
  constructor(
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository,

    @inject("HotelsImagesRepository")
    private hotelsImagesRepository: IHotelsImagesRepository
  ) {}

  async execute(): Promise<Hotel[]> {
    const hotels = await this.hotelsRepository.index();

    return hotels;
  }
}

export { ListHotelsService };
