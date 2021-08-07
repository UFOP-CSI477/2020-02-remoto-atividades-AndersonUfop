import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindByReservesService } from "../services/FindByReservesService";
import reservesView from "../views/reserves.view";

class FindByReservesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findByReservesService = container.resolve(FindByReservesService);

    const reserves = await findByReservesService.execute();

    return response.json(reservesView.renderMany(reserves));
  }
}

export { FindByReservesController };
