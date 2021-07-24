import { ICreateApartmentDTO } from "../dtos/ICreateApartmentDTO";
import { Apartment } from "../entities/Apartment";

interface IApartmentsRepository {
  create(data: ICreateApartmentDTO): Promise<Apartment>;
}

export { IApartmentsRepository };
