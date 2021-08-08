import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateHotelService } from "../services/CreateHotelService";

class CreateHotelController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name_hotel,
      latitude,
      longitude,
      rooms_number,
      pool,
      wifi,
      parking,
      breakfast,
      owner_id,
    } = request.body;

    const createHotelService = container.resolve(CreateHotelService);

    await createHotelService.execute({
      name_hotel,
      latitude,
      longitude,
      rooms_number,
      pool,
      wifi,
      parking,
      breakfast,
      owner_id,
    });

    return response.status(201).send();
  }
}

export { CreateHotelController };
