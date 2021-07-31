import { inject, injectable } from "tsyringe";

import { Reserve } from "../entities/Reserve";
import { IReservesRepository } from "../repositories/IReservesRepository";

@injectable()
class FindReserveByApartmentService {
  constructor(
    @inject("ReservesRepository")
    private reservesRepository: IReservesRepository
  ) {}

  async execute(apartment_id: string): Promise<Reserve> {
    const reserve = await this.reservesRepository.findByIdApartment(
      apartment_id
    );

    return reserve;
  }
}

export { FindReserveByApartmentService };
