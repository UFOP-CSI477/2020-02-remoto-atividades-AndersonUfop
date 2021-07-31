import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindReserveByIdService } from "../services/FindReserveByIdService";

class FindReserveByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findReserveByIdService = container.resolve(FindReserveByIdService);

    const reserve = await findReserveByIdService.execute(id);

    return response.json(reserve);
  }
}

export { FindReserveByIdController };
