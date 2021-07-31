import { inject, injectable } from "tsyringe";

import { Apartment } from "../../hotels/entities/Apartment";
import { IApartmentsRepository } from "../../hotels/repositories/IApartmentsRepository";
import { Reserve } from "../entities/Reserve";
import { IReservesRepository } from "../repositories/IReservesRepository";

@injectable()
class FindByReservesService {
  constructor(
    @inject("ReservesRepository")
    private reservesRepository: IReservesRepository,
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  async execute(): Promise<Reserve[]> {
    const reserves = await this.reservesRepository.list();

    return reserves;
  }
}

export { FindByReservesService };
