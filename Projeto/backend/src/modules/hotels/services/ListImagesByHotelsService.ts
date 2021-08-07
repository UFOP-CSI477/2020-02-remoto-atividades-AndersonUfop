import { inject, injectable } from "tsyringe";

import { Hotel } from "../infra/entities/Hotel";
import { IHotelsRepository } from "../repositories/IHotelsRepository";

@injectable()
class ListImagesByHotelsService {
  constructor(
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute(hotel_id: string): Promise<Hotel> {
    const hotel = await this.hotelsRepository.findById(hotel_id);

    return hotel;
  }
}

export { ListImagesByHotelsService };
