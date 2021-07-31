import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindApartmentsHotelAvailableService } from "../services/FindApartmentsHotelAvailableService";

class FindApartmentsByHotelAvailableController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { hotel_id } = request.params;

    const findApartmentsByHotelAvailableService = container.resolve(
      FindApartmentsHotelAvailableService
    );

    const apartments = await findApartmentsByHotelAvailableService.execute(
      hotel_id
    );

    return response.json(apartments);
  }
}

export { FindApartmentsByHotelAvailableController };
