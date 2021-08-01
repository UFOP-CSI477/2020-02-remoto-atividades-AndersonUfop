import { inject, injectable } from "tsyringe";

import { Apartment } from "../infra/entities/Apartment";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

@injectable()
class FindApartmentsByHotelService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  async execute(hotel_id: string): Promise<Apartment[]> {
    const apartment = await this.apartmentsRepository.findApartmentsByHotel(
      hotel_id
    );

    return apartment;
  }
}

export { FindApartmentsByHotelService };
