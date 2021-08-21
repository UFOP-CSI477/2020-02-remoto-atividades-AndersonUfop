import { ICreateApartmentDTO } from "@modules/apartments/dtos/ICreateApartmentDTO";
import { Apartment } from "@modules/apartments/infra/entities/Apartment";
import { IApartmentsRepository } from "@modules/apartments/repositories/IApartmentsRepository";
import { getManager, getRepository, Repository } from "typeorm";

class ApartmentsRepository implements IApartmentsRepository {
  private repository: Repository<Apartment>;

  constructor() {
    this.repository = getRepository(Apartment);
  }

  async create({
    hotel_id,
    room_number,
    description,
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
      description,
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
    const id_apartment = await this.repository.findOne({
      where: { id },
      relations: ["images"],
    });

    return id_apartment;
  }

  async findByNumber(ap: number): Promise<Apartment> {
    const apartment = await this.repository.findOne(ap);

    return apartment;
  }

  async findApartmentsByHotel(hotel_id: string): Promise<Apartment[]> {
    const apartment = await this.repository.find({
      where: { hotel_id },

      relations: ["images"],
    });

    return apartment;
  }

  async findByAvailable(id: string): Promise<Apartment> {
    const apartmentAvailable = await this.repository.findOne({
      where: { id, availability: true },
      relations: ["images"],
    });

    return apartmentAvailable;
  }

  async findByApartmentsHotelAvailable(hotel_id: string): Promise<Apartment[]> {
    const apartments = await this.repository.find({
      where: { hotel_id, availability: true },
      relations: ["images"],
    });

    return apartments;
  }

  async findByPrice(price: number): Promise<Apartment[]> {
    const entityManager = getManager();
    const someQuery = entityManager.query(`
    select * from apartments where price < ${price}
    `);

    return someQuery;
  }
}

export { ApartmentsRepository };
