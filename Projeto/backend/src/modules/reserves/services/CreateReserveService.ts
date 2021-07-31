import { inject, injectable } from "tsyringe";

import { AppError } from "../../../errors/AppError";
import { IDateProvider } from "../../../shared/container/providers/DateProvider/IDateProvider";
import { IApartmentsRepository } from "../../hotels/repositories/IApartmentsRepository";
import { IReservesRepository } from "../repositories/IReservesRepository";

interface IRequest {
  apartment_id: string;
  user_id: string;
  cpf: string;
  birth_date: Date;
  date_checkin: Date;
  date_checkout: Date;
}

@injectable()
class CreateReserveService {
  constructor(
    @inject("ReservesRepository")
    private reservesRepository: IReservesRepository,
    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) {}

  async execute({
    apartment_id,
    user_id,
    cpf,
    birth_date,
    date_checkin,
    date_checkout,
  }: IRequest): Promise<void> {
    // Verificar se o apto está livre ou ocupado
    const apartmentAvailable = await this.apartmentsRepository.findByAvailable(
      apartment_id
    );

    if (!apartmentAvailable) {
      throw new AppError("Apartment unavailable", 401);
    }

    // Verificar se o usuário já realizou alguma reserva

    /* const openByUser = await this.reservesRepository.findOpenReserveByUser(
      user_id
    );

    if (openByUser) {
      throw new AppError("There are open reservations in the username", 401);
    } */

    // Verificar se a data inicial é maior do que a data atual
    const dateNow = this.dateProvider.dateNow();

    const dateAfterNow = this.dateProvider.compareIfBefore(
      dateNow,
      date_checkin
    );

    if (!dateAfterNow) {
      throw new AppError("Check in must be at a later date.", 401);
    }

    // Verificar se a data inicial é menor do que a data final

    const startDateAfterEndDate = this.dateProvider.compareIfBefore(
      date_checkin,
      date_checkout
    );

    if (!startDateAfterEndDate) {
      throw new AppError("Checkout cannot be before check in", 401);
    }

    // Verificar se o usuário tem mais de 18 anos

    const age = this.dateProvider.compareInYears(birth_date, dateNow);

    if (age < 18) {
      throw new AppError(
        "You must be at least 18 years old to make a reservation.",
        401
      );
    }

    // Calcular duração da hospedagem
    const totalDays = this.dateProvider.compareInDays(
      date_checkin,
      date_checkout
    );

    // Calcular o valor da reserva
    const value = apartmentAvailable.price;

    const valueTotal = totalDays * value;

    await this.reservesRepository.create({
      apartment_id,
      user_id,
      cpf,
      birth_date,
      date_checkin,
      date_checkout,
      total: valueTotal,
    });

    await this.apartmentsRepository.updateAvailable(apartment_id, false);
  }
}

export { CreateReserveService };
