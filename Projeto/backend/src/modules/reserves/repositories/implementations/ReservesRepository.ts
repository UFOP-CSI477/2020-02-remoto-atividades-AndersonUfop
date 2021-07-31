import { getManager, getRepository, Repository } from "typeorm";

import { Apartment } from "../../../hotels/entities/Apartment";
import { Hotel } from "../../../hotels/entities/Hotel";
import { ICreateReserveDTO } from "../../dtos/ICreateReserveDTO";
import { Reserve } from "../../entities/Reserve";
import { IReservesRepository } from "../IReservesRepository";

class ReservesRepository implements IReservesRepository {
  private repository: Repository<Reserve>;

  constructor() {
    this.repository = getRepository(Reserve);
  }

  async create({
    apartment_id,
    user_id,
    cpf,
    birth_date,
    date_checkin,
    date_checkout,
    total,
  }: ICreateReserveDTO): Promise<Reserve> {
    const reserve = this.repository.create({
      apartment_id,
      user_id,
      cpf,
      birth_date,
      date_checkin,
      date_checkout,
      total,
    });

    await this.repository.save(reserve);

    return reserve;
  }

  async findById(id: string): Promise<Reserve> {
    const reserve = await this.repository.findOne({ id });

    return reserve;
  }

  async findByIdApartment(apartment_id: string): Promise<Reserve> {
    const reserve = await this.repository.findOne({
      where: { apartment_id },
    });

    return reserve;
  }

  async findOpenReserveByUser(user_id: string): Promise<Reserve> {
    const openByUser = this.repository.findOne({
      where: { user_id },
    });

    return openByUser;
  }

  async list(): Promise<Reserve[]> {
    const reserves = this.repository.find();

    return reserves;
  }
}

export { ReservesRepository };
