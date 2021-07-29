import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListApartmentsService } from "../services/ListApartmentsService";

class ListApartmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { hotel_id, suite, tv, air_conditioning, room_type } = request.query;

    const listApartmentsService = container.resolve(ListApartmentsService);

    const all = await listApartmentsService.execute({
      hotel_id: hotel_id as string,
      suite: suite as string,
      tv: tv as string,
      air_conditioning: air_conditioning as string,
      room_type: room_type as string,
    });

    return response.json(all);
  }
}

export { ListApartmentsController };
