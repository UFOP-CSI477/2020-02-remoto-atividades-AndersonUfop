import { ICreateApartmentDTO } from "../dtos/ICreateApartmentDTO";
import { Apartment } from "../entities/Apartment";

interface IApartmentsRepository {
  create(data: ICreateApartmentDTO): Promise<Apartment>;
  list(): Promise<Apartment[]>;
  /* price: number,
    suite: string,
    tv: string,
    air_conditioning: string,
    room_type: string */
  findById(id: string): Promise<Apartment>;
  findByNumber(ap: number): Promise<Apartment>;
  findApartmentsByHotel(hotel_id: string): Promise<Apartment[]>;
}

export { IApartmentsRepository };
