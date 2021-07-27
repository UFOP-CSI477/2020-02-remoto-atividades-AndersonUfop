import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListApartmentsService } from "../services/ListApartmentsService";

class ListApartmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listApartmentsService = container.resolve(ListApartmentsService);

    const all = await listApartmentsService.execute();

    return response.json(all);
  }
}

export { ListApartmentsController };
