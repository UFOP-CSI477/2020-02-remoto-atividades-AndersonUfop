import { ICreateHotelDTO } from "../dtos/ICreateHotelDTO";
import { Hotel } from "../entities/Hotel";

interface IHotelsRepository {
  findByName(name_hotel: string): Promise<Hotel>;
  list(): Promise<Hotel[]>;
  create(data: ICreateHotelDTO): Promise<Hotel>;
}

export { IHotelsRepository };
