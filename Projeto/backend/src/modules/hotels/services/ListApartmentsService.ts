import { inject, injectable } from "tsyringe";

import { Apartment } from "../entities/Apartment";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

@injectable()
class ListApartmentsService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  async execute(): Promise<Apartment[]> {
    const apartments = await this.apartmentsRepository.list();

    return apartments;
  }
}

export { ListApartmentsService };
