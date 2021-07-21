import { inject, injectable } from "tsyringe";

import { AppError } from "../../../errors/AppError";
import { User } from "../../users/entities/User";
import { IHotelsRepository } from "../repositories/IHotelsRepository";

interface IRequest {
  name_hotel: string;
  address: string;
  city: string;
  state: string;
  rooms_number: number;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  owner_id: User;
}

@injectable()
class CreateHotelService {
  constructor(
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute({
    name_hotel,
    address,
    city,
    state,
    rooms_number,
    pool,
    wifi,
    parking,
    breakfast,
    owner_id,
  }: IRequest): Promise<void> {
    const hotelExists = await this.hotelsRepository.findByName(name_hotel);

    if (hotelExists) {
      throw new AppError("Hotel already exists", 401);
    }

    await this.hotelsRepository.create({
      name_hotel,
      address,
      city,
      state,
      rooms_number,
      pool,
      wifi,
      parking,
      breakfast,
      owner_id,
    });
  }
}

export { CreateHotelService };
