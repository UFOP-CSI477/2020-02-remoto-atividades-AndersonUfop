import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindByPriceApartmentService } from "../services/FindByPriceApartmentService";

class FindByPriceApartmentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { price } = request.body;

    const findByPriceApartmentsService = container.resolve(
      FindByPriceApartmentService
    );

    const apartment = await findByPriceApartmentsService.execute(price);

    return response.json(apartment);
  }
}

export { FindByPriceApartmentsController };
