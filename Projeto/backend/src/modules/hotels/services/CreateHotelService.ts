import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { IHotelsRepository } from "../repositories/IHotelsRepository";

interface IRequest {
  name_hotel: string;
  latitude: number;
  longitude: number;
  rooms_number: number;
  pool: boolean;
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  owner_id: string;
}

@injectable()
class CreateHotelService {
  constructor(
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name_hotel,
    latitude,
    longitude,
    rooms_number,
    pool,
    wifi,
    parking,
    breakfast,
    owner_id,
  }: IRequest): Promise<void> {
    const hotelExists = await this.hotelsRepository.findByName(name_hotel);
    const ownerExists = await this.usersRepository.findById(owner_id);

    if (hotelExists) {
      throw new AppError("Hotel already exists", 401);
    }

    if (!ownerExists) {
      throw new AppError("Owner not exists", 401);
    }

    console.log("teste");

    const response = await this.hotelsRepository.create({
      name_hotel,
      latitude,
      longitude,
      rooms_number,
      pool,
      wifi,
      parking,
      breakfast,
      owner_id,
    });

    console.log(response);
  }
}

export { CreateHotelService };
