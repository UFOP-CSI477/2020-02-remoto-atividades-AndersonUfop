import { inject, injectable } from "tsyringe";

import { Reserve } from "../infra/entities/Reserve";
import { IReservesRepository } from "../repositories/IReservesRepository";

@injectable()
class FindByReservesService {
  constructor(
    @inject("ReservesRepository")
    private reservesRepository: IReservesRepository
  ) {}

  async execute(): Promise<Reserve[]> {
    const reserves = await this.reservesRepository.list();

    return reserves;
  }
}

export { FindByReservesService };
