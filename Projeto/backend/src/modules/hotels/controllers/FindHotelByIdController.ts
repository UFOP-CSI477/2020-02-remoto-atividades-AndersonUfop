import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindHotelByIdService } from "../services/FindHotelByIdService";
import hotelsView from "../views/hotels.view";

class FindHotelByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { hotel_id } = request.params;

    const findHotelByIdService = container.resolve(FindHotelByIdService);

    const hotels = await findHotelByIdService.execute(hotel_id);

    return response.json(hotelsView.render(hotels));
  }
}

export { FindHotelByIdController };
