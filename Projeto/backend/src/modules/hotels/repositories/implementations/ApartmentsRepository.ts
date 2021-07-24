import { getRepository, Repository } from "typeorm";

import { ICreateApartmentDTO } from "../../dtos/ICreateApartmentDTO";
import { Apartment } from "../../entities/Apartment";
import { IApartmentsRepository } from "../IApartmentsRepository";

class ApartmentsRepository implements IApartmentsRepository {
  private repository: Repository<Apartment>;

  constructor() {
    this.repository = getRepository(Apartment);
  }

  async create({
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
    availability,
  }: ICreateApartmentDTO): Promise<Apartment> {
    const apartment = this.repository.create({
      hotel_id,
      room_number,
      price,
      suite,
      tv,
      air_conditioning,
      room_type,
      availability,
    });

    await this.repository.save(apartment);

    return apartment;
  }
}

export { ApartmentsRepository };
