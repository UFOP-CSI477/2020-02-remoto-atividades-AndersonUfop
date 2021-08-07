import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindApartmentsByHotelService } from "../services/FindApartmentsByHotelService";
import apartmentsView from "../views/apartments.view";

class FindApartmentsByHotelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { hotel_id } = request.params;

    const findApartmentsByHotelService = container.resolve(
      FindApartmentsByHotelService
    );

    const apartments = await findApartmentsByHotelService.execute(hotel_id);

    return response.json(apartmentsView.renderMany(apartments));
  }
}

export { FindApartmentsByHotelController };
