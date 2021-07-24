import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListHotelsService } from "../services/ListHotelsService";

class ListHotelsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listHotelsService = container.resolve(ListHotelsService);

    const all = await listHotelsService.execute();

    return response.json(all);
  }
}

export { ListHotelsController };
