import { inject, injectable } from "tsyringe";

import { Apartment } from "../entities/Apartment";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

interface IRequest {
  hotel_id: string;
  suite?: string;
  tv?: string;
  air_conditioning?: string;
  room_type?: string;
}

@injectable()
class ListApartmentsService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  async execute({
    hotel_id,
    suite,
    tv,
    air_conditioning,
    room_type,
  }: IRequest): Promise<Apartment[]> {
    const apartments = await this.apartmentsRepository.list(
      hotel_id,
      suite,
      tv,
      air_conditioning,
      room_type
    );

    return apartments;
  }
}

export { ListApartmentsService };
