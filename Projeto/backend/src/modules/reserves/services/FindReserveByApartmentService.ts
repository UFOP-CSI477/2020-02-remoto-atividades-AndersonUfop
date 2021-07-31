import { inject, injectable } from "tsyringe";

import { IApartmentsRepository } from "../../hotels/repositories/IApartmentsRepository";
import { IHotelsRepository } from "../../hotels/repositories/IHotelsRepository";
import { Reserve } from "../entities/Reserve";
import { IReservesRepository } from "../repositories/IReservesRepository";

@injectable()
class FindReserveByApartmentService {
  constructor(
    @inject("ReservesRepository")
    private reservesRepository: IReservesRepository,

    @inject("ApartmentsRepository")
    private apartmentsRepository: IApartmentsRepository,

    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute(apartment_id: string): Promise<Reserve> {
    const reserve = await this.reservesRepository.findByIdApartment(
      apartment_id
    );

    const apartmentId = reserve.apartment_id;

    const apartment = await this.apartmentsRepository.findById(apartmentId);

    const hotelId = apartment.hotel_id;

    const hotel = await this.hotelsRepository.findById(hotelId);

    reserve.apartment = apartment;
    reserve.apartment.hotel = hotel;

    return reserve;
  }
}

export { FindReserveByApartmentService };
