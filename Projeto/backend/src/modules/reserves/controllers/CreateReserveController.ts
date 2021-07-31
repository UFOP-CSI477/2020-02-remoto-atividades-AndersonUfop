import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateReserveService } from "../services/CreateReserveService";

class CreateReserveController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      apartment_id,
      user_id,
      cpf,
      birth_date,
      date_checkin,
      date_checkout,
    } = request.body;

    const createReserveService = container.resolve(CreateReserveService);

    await createReserveService.execute({
      apartment_id,
      user_id,
      cpf,
      birth_date,
      date_checkin,
      date_checkout,
    });

    return response.status(201).send();
  }
}

export { CreateReserveController };
