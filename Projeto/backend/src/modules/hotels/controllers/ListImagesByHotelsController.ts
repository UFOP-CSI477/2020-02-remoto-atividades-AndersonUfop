import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListImagesByHotelsService } from "../services/ListImagesByHotelsService";
import hotelsView from "../views/hotels.view";

class ListImagesByHotelsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { hotel_id } = request.params;

    const listImagesByHotelsService = container.resolve(
      ListImagesByHotelsService
    );

    const hotels = await listImagesByHotelsService.execute(hotel_id);

    return response.json(hotelsView.render(hotels));
  }
}

export { ListImagesByHotelsController };
