import { inject, injectable } from "tsyringe";

import { Apartment } from "../entities/Apartment";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

@injectable()
class FindByPriceApartmentService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  async execute(price: number): Promise<Apartment[]> {
    const apartments = await this.apartmentsRepository.findByPrice(price);

    console.log(apartments);
    return apartments;
  }
}

export { FindByPriceApartmentService };
