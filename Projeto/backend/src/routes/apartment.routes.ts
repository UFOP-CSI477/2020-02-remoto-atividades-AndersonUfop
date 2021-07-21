import { Router } from "express";

import { ApartmentsRepository } from "../modules/hotels/repositories/implementations/ApartmentsRepository";
import { CreateApartmentService } from "../modules/hotels/services/CreateApartmentService";

const apartmentsRoutes = Router();

const apartmentsRepository = new ApartmentsRepository();

apartmentsRoutes.post("/", (request, response) => {
  const {
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
  } = request.body;

  const createApartmentService = new CreateApartmentService(
    apartmentsRepository
  );

  createApartmentService.execute({
    hotel_id,
    room_number,
    price,
    suite,
    tv,
    air_conditioning,
    room_type,
  });

  return response.status(201).send();
});

export { apartmentsRoutes };
