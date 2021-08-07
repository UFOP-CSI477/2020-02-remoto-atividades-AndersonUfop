import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListHotelsService } from "../services/ListHotelsService";

class ListHotelsController {
  async handle(request: Request, response: Response): Promise<Response> {
    /* const { city, pool, wifi, parking, breakfast } = request.query; */

    const listHotelsService = container.resolve(ListHotelsService);

    /*  const hotels = await listHotelsService.execute({
      city: city as string,
      pool: pool as string,
      wifi: wifi as string,
      parking: parking as string,
      breakfast: breakfast as string,
    }); */

    const hotels = await listHotelsService.execute();

    return response.json({ hotels: classToClass(hotels) });
  }
}

export { ListHotelsController };
