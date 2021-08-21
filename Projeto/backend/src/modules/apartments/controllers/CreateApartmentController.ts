import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateApartmentService } from "../services/CreateApartmentService";

class CreateApartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      hotel_id,
      room_number,
      description,
      price,
      suite,
      tv,
      air_conditioning,
      room_type,
    } = request.body;

    const createApartmentService = container.resolve(CreateApartmentService);

    await createApartmentService.execute({
      hotel_id,
      room_number,
      description,
      price,
      suite,
      tv,
      air_conditioning,
      room_type,
    });

    return response.status(201).send();
  }
}

export { CreateApartmentController };
