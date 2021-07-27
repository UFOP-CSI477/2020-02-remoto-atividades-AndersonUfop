import { inject, injectable } from "tsyringe";

import { AppError } from "../../../errors/AppError";
import { IApartmentsRepository } from "../repositories/IApartmentsRepository";
import { IHotelsRepository } from "../repositories/IHotelsRepository";

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
    private apartmentsRepository: IApartmentsRepository,
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute({
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
  }: IRequest): Promise<void> {
    const hotelExists = await this.hotelsRepository.findById(hotel_id);
    // const apartment = await this.apartmentsRepository.findByNumber(room_number);
    const max_apartments = hotelExists.rooms_number;
    const total_apartments = await (
      await this.apartmentsRepository.findApartmentsByHotel(hotel_id)
    ).length;

    // Verifica se o hotel existe
    if (!hotelExists) {
      throw new AppError("Hotel not exits!", 401);
    }

    /* if (apartment) {
      throw new AppError("Apartment already exists", 401);
    } */

    // Verifica se a quantidade de quartos não excede a capacidade do hotel
    if (total_apartments >= max_apartments) {
      throw new AppError("The number of rooms exceeds the maximum limit!", 401);
    }

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
