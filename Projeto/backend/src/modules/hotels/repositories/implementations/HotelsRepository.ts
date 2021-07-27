import { getRepository, Repository } from "typeorm";

import { ICreateHotelDTO } from "../../dtos/ICreateHotelDTO";
import { Hotel } from "../../entities/Hotel";
import { IHotelsRepository } from "../IHotelsRepository";

class HotelsRepository implements IHotelsRepository {
  private repository: Repository<Hotel>;

  constructor() {
    this.repository = getRepository(Hotel);
  }

  async create({
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
  }: ICreateHotelDTO): Promise<Hotel> {
    const hotel = this.repository.create({
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

    await this.repository.save(hotel);

    return hotel;
  }

  async list(
    city?: string,
    pool?: string,
    wifi?: string,
    parking?: string,
    breakfast?: string
  ): Promise<Hotel[]> {
    const hotelsQuery = await this.repository.createQueryBuilder("h");

    if (city) {
      hotelsQuery.andWhere("city = :city", { city });
    }

    if (pool) {
      hotelsQuery.andWhere("pool = :pool", { pool });
    }

    if (wifi) {
      hotelsQuery.andWhere("wifi = :wifi", { wifi });
    }

    if (parking) {
      hotelsQuery.andWhere("parking = :parking", { parking });
    }

    if (breakfast) {
      hotelsQuery.andWhere("breakfast = :breakfast", { breakfast });
    }

    const hotels = await hotelsQuery.getMany();

    return hotels;
  }

  async findByName(name_hotel: string): Promise<Hotel> {
    const hotel = await this.repository.findOne({ name_hotel });
    return hotel;
  }

  async findById(id: string): Promise<Hotel> {
    const id_hotel = await this.repository.findOne({ id });

    return id_hotel;
  }
}

export { HotelsRepository };
