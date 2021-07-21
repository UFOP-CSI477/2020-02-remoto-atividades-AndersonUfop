import { ICreateApartmentDTO } from "../../dtos/ICreateApartmentDTO";
import { Apartment } from "../../entities/Apartment";
import { IApartmentsRepository } from "../IApartmentsRepository";

class ApartmentsRepository implements IApartmentsRepository {
  private apartments: Apartment[];

  constructor() {
    this.apartments = [];
  }

  create({
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
  }: ICreateApartmentDTO): void {
    const apartment = new Apartment();

    Object.assign(apartment, {
      hotel_id,
      room_number,
      price,
      suite,
      tv,
      air_conditioning,
      room_type,
      created_at: new Date(),
    });

    this.apartments.push(apartment);
  }

  findByNumber(room_number: number): Apartment {
    const apartment = this.apartments.find(
      (apartment) => apartment.room_number === room_number
    );
    return apartment;
  }
}

export { ApartmentsRepository };
