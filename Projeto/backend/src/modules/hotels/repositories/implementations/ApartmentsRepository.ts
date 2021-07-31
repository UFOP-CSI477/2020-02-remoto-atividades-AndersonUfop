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

  async list(
    hotel_id: string,
    suite?: string,
    tv?: string,
    air_conditioning?: string,
    room_type?: string
  ): Promise<Apartment[]> {
    const apartmentsQuery = await this.repository.createQueryBuilder("a");

    if (hotel_id) {
      apartmentsQuery.andWhere("a.hotel_id = :hotel_id", { hotel_id });
    }

    if (suite) {
      apartmentsQuery.andWhere("suite = :suite", { suite });
    }

    if (tv) {
      apartmentsQuery.andWhere("tv = :tv", { tv });
    }

    if (air_conditioning) {
      apartmentsQuery.andWhere("air_conditioning = :air_conditioning", {
        air_conditioning,
      });
    }

    if (room_type) {
      apartmentsQuery.andWhere("room_type = :room_type", { room_type });
    }

    const apartments = await apartmentsQuery.getMany();

    return apartments;
  }

  async updateAvailable(id: string, availability: boolean): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({ availability })
      .where("id = :id")
      .setParameters({ id })
      .execute();
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

  async findByAvailable(id: string): Promise<Apartment> {
    const apartmentAvailable = await this.repository.findOne({
      where: { id, availability: true },
    });

    return apartmentAvailable;
  }
}

export { ApartmentsRepository };
