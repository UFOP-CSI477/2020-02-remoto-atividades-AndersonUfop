import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindApartmentsHotelAvailableService } from "../services/FindApartmentsHotelAvailableService";
import apartmentsView from "../views/apartments.view";

class FindApartmentsByHotelAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { hotel_id } = request.params;

    const findApartmentsByHotelAvailableService = container.resolve(
      FindApartmentsHotelAvailableService
    );

    const apartments = await findApartmentsByHotelAvailableService.execute(
      hotel_id
    );

    return response.json(apartmentsView.renderMany(apartments));
  }
}

export { FindApartmentsByHotelAvailableController };
