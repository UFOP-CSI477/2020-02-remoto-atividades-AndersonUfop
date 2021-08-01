import { inject, injectable } from "tsyringe";

import { Apartment } from "../infra/entities/Apartment";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

@injectable()
class FindApartmentsHotelAvailableService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  async execute(hotel_id: string): Promise<Apartment[]> {
    const apartments =
      await this.apartmentsRepository.findByApartmentsHotelAvailable(hotel_id);

    return apartments;
  }
}

export { FindApartmentsHotelAvailableService };
