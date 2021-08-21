import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { Hotel } from "../infra/entities/Hotel";
import { IHotelsRepository } from "../repositories/IHotelsRepository";

@injectable()
class FindHotelByIdService {
  constructor(
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute(hotel_id: string): Promise<Hotel> {
    const hotel = await this.hotelsRepository.findById(hotel_id);

    if (!hotel) {
      throw new AppError("Hotel not exits", 404);
    }

    return hotel;
  }
}

export { FindHotelByIdService };
