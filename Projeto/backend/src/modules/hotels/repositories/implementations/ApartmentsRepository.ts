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

  /* price: number,
  suite: string,
  tv: string,
  air_conditioning: string,
  room_type: string */

  async list(): Promise<Apartment[]> {
    const apartments = await this.repository.find();

    console.log(apartments.length);

    return apartments;
  }

  async findById(id: string): Promise<Apartment> {
    const id_apartment = await this.repository.findOne({ id });

    return id_apartment;
  }

  async findByNumber(ap: number): Promise<Apartment> {
    const apartment = await this.repository.findOne(ap);

    return apartment;
  }

  async findApartmentsByHotel(hotel_id: string): Promise<Apartment[]> {
    const apartment = await this.repository.find({ where: { hotel_id } });

    return apartment;
  }
}

export { ApartmentsRepository };
