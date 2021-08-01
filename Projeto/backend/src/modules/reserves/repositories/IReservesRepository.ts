import { ICreateReserveDTO } from "../dtos/ICreateReserveDTO";
import { Reserve } from "../infra/entities/Reserve";

interface IReservesRepository {
  create(data: ICreateReserveDTO): Promise<Reserve>;
  findById(id: string): Promise<Reserve>;
  findByIdApartment(apartment_id: string): Promise<Reserve>;
  findOpenReserveByUser(user_id: string): Promise<Reserve>;
  list(): Promise<Reserve[]>;
}

export { IReservesRepository };
