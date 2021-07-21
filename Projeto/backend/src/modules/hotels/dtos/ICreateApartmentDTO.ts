import { Apartment } from "../entities/Apartment";

interface ICreateApartmentDTO {
  hotel_id: string;
  room_number: number;
  price: number;
  suite: boolean;
  tv: boolean;
  air_conditioning: string;
  room_type: string;
}

export { ICreateApartmentDTO };
