import { inject, injectable } from "tsyringe";

import { Apartment } from "../infra/entities/Apartment";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

@injectable()
class ListImagesByApartmentsService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  async execute(apartment_id: string): Promise<Apartment> {
    const apartment = await this.apartmentsRepository.findById(apartment_id);

    return apartment;
  }
}

export { ListImagesByApartmentsService };
