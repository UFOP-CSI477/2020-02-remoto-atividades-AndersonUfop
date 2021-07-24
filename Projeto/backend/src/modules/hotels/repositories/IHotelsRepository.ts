import { ICreateHotelDTO } from "../dtos/ICreateHotelDTO";
import { Hotel } from "../entities/Hotel";

interface IHotelsRepository {
  create(data: ICreateHotelDTO): Promise<Hotel>;
  list(): Promise<Hotel[]>;
  findById(id: string): Promise<Hotel>;
  findByName(name_hotel: string): Promise<Hotel>;
}

export { IHotelsRepository };
