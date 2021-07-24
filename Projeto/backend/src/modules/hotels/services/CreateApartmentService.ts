import { inject, injectable } from "tsyringe";

import { AppError } from "../../../errors/AppError";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

interface IRequest {
  hotel_id: string;
  room_number: number;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: boolean;
  room_type: string;
  availability?: boolean;
}

@injectable()
class CreateApartmentService {
  constructor(
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository
  ) {}

  execute({
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
  }: IRequest): void {
    this.apartmentsRepository.create({
      hotel_id,
      room_number,
      price,
      suite,
      tv,
      air_conditioning,
      room_type,
      availability: true,
    });
  }
}

export { CreateApartmentService };
