import { ICreateHotelDTO } from "@modules/hotels/dtos/ICreateHotelDTO";
import { Hotel } from "@modules/hotels/infra/entities/Hotel";
import { IHotelsRepository } from "@modules/hotels/repositories/IHotelsRepository";
import { getRepository, Repository } from "typeorm";

class HotelsRepository implements IHotelsRepository {
  private repository: Repository<Hotel>;

  constructor() {
    this.repository = getRepository(Hotel);
  }

  async create({
    name_hotel,
    latitude,
    longitude,
    rooms_number,
    pool,
    wifi,
    parking,
    breakfast,
    owner_id,
  }: ICreateHotelDTO): Promise<Hotel> {
    const hotel = this.repository.create({
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

    await this.repository.save(hotel);

    return hotel;
  }

  async list(
    pool?: string,
    wifi?: string,
    parking?: string,
    breakfast?: string
  ): Promise<Hotel[]> {
    const hotelsQuery = await this.repository.createQueryBuilder("h");

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

  async index(): Promise<Hotel[]> {
    const hotels = this.repository.find({
      relations: ["images"],
    });

    return hotels;
  }

  async findByName(name_hotel: string): Promise<Hotel> {
    const hotel = await this.repository.findOne({ name_hotel });
    return hotel;
  }

  async findById(id: string): Promise<Hotel> {
    const id_hotel = await this.repository.findOne({
      where: { id },
      relations: ["images"],
    });

    return id_hotel;
  }
}

export { HotelsRepository };
