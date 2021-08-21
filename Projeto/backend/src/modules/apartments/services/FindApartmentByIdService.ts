import { injectable, inject } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { Apartment } from "../infra/entities/Apartment";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

@injectable()
class FindApartmentByIdService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository /* @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository */
  ) {}

  async execute(apartment_id: string): Promise<Apartment> {
    const apartment = await this.apartmentsRepository.findById(apartment_id);

    if (!apartment) {
      throw new AppError("Apartment not exists", 404);
    }

    // const hotel = await this.hotelsRepository.findById(apartment.hotel_id);

    /* apartment.hotel = hotel;

console.log(apartment); */

    return apartment;
  }
}

export { FindApartmentByIdService };
