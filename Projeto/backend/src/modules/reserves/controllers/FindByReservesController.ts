import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindByReservesService } from "../services/FindByReservesService";

class FindByReservesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findByReservesService = container.resolve(FindByReservesService);

    const reserves = await findByReservesService.execute();

    return response.json(reserves);
  }
}

export { FindByReservesController };
