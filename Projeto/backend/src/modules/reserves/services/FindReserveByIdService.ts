import { IApartmentsRepository } from "@modules/apartments/repositories/IApartmentsRepository";
import { IHotelsRepository } from "@modules/hotels/repositories/IHotelsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { Reserve } from "../infra/entities/Reserve";
import { IReservesRepository } from "../repositories/IReservesRepository";

@injectable()
class FindReserveByIdService {
  constructor(
    @inject("ReservesRepository")
    private reservesRepository: IReservesRepository,

    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository,

    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute(reserve_id: string): Promise<Reserve> {
    const reserve = await this.reservesRepository.findById(reserve_id);

    if (!reserve) {
      throw new AppError("This reserve not exists", 401);
    }

    const apartmentId = reserve.apartment_id;

    const apartmentReserve = await this.apartmentsRepository.findById(
      apartmentId
    );

    const hotelId = apartmentReserve.hotel_id;

    const hotelApartment = await this.hotelsRepository.findById(hotelId);

    reserve.apartment = apartmentReserve;
    apartmentReserve.hotel = hotelApartment;

    return reserve;
  }
}

export { FindReserveByIdService };
