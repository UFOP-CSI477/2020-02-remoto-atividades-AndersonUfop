import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindApartmentByIdService } from "../services/FindApartmentByIdService";

class FindApartmentByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { apartment_id } = request.params;

    const findApartmentByIdService = container.resolve(
      FindApartmentByIdService
    );

    const apartment = await findApartmentByIdService.execute(apartment_id);

    return response.json(apartment);
  }
}

export { FindApartmentByIdController };
