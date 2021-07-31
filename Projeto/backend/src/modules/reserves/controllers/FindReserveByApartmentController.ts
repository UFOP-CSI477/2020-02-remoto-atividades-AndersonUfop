import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindReserveByApartmentService } from "../services/FindReserveByApartmentService";

class FindReserveByApartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findReserveByApartmentService = container.resolve(
      FindReserveByApartmentService
    );

    const reserve = await findReserveByApartmentService.execute(id);

    return response.json(reserve);
  }
}

export { FindReserveByApartmentController };
