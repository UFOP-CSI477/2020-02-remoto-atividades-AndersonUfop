import { ICreateApartmentDTO } from "../dtos/ICreateApartmentDTO";
import { Apartment } from "../infra/entities/Apartment";

interface IApartmentsRepository {
  create(data: ICreateApartmentDTO): Promise<Apartment>;
  list(
    hotel_id: string,
    suite?: string,
    tv?: string,
    air_conditioning?: string,
    room_type?: string
  ): Promise<Apartment[]>;

  updateAvailable(id: string, availability: boolean): Promise<void>;
  findById(id: string): Promise<Apartment>;
  findByNumber(ap: number): Promise<Apartment>;
  findApartmentsByHotel(hotel_id: string): Promise<Apartment[]>;
  findByAvailable(id: string): Promise<Apartment>;
  findByApartmentsHotelAvailable(hotel_id: string): Promise<Apartment[]>;
  findByPrice(price: number): Promise<Apartment[]>;
}

export { IApartmentsRepository };
