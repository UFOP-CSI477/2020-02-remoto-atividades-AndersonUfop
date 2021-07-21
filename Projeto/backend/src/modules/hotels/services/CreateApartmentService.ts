import { AppError } from "../../../errors/AppError";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";

interface IRequest {
  hotel_id: string;
  room_number: number;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: string;
  room_type: string;
}

class CreateApartmentService {
  constructor(private apartmentsRepository: IApartmentsRepository) {}
  execute({
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
  }: IRequest): void {
    const apartmentAlreadyExists =
      this.apartmentsRepository.findByNumber(room_number);

    if (apartmentAlreadyExists) {
      throw new AppError("Apartment already exists", 401);
    }

    this.apartmentsRepository.create({
      hotel_id,
      room_number,
      price,
      suite,
      tv,
      air_conditioning,
      room_type,
    });
  }
}

export { CreateApartmentService };
