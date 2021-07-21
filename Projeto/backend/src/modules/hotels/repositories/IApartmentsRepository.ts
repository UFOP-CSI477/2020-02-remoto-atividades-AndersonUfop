import { ICreateApartmentDTO } from "../dtos/ICreateApartmentDTO";
import { Apartment } from "../entities/Apartment";

interface IApartmentsRepository {
  create({
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
  }: ICreateApartmentDTO): void;

  findByNumber(room_number: number): Apartment;
}

export { IApartmentsRepository };
