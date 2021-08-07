import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListImagesByApartmentsService } from "../services/ListImagesByApartmentsService";
import apartmentsView from "../views/apartments.view";

class ListImagesByApartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { apartment_id } = request.params;

    const listImagesByApartmentsService = container.resolve(
      ListImagesByApartmentsService
    );

    const apartments = await listImagesByApartmentsService.execute(
      apartment_id
    );

    return response.json(apartmentsView.render(apartments));
  }
}

export { ListImagesByApartmentController };
