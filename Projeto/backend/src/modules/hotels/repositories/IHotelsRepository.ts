import { ICreateHotelDTO } from "../dtos/ICreateHotelDTO";
import { Hotel } from "../infra/entities/Hotel";

interface IHotelsRepository {
  create(data: ICreateHotelDTO): Promise<Hotel>;
  list(
    city?: string,
    pool?: string,
    wifi?: string,
    parking?: string,
    breakfast?: string
  ): Promise<Hotel[]>;

  findById(id: string): Promise<Hotel>;
  findByName(name_hotel: string): Promise<Hotel>;
}

export { IHotelsRepository };
