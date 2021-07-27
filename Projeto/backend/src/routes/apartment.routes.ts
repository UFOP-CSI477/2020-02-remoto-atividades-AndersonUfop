import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateApartmentController } from "../modules/hotels/controllers/CreateApartmentController";
import { FindApartmentsByHotelController } from "../modules/hotels/controllers/FindApartmentsByHotelController";
import { ListApartmentsController } from "../modules/hotels/controllers/ListApartmentsController";

const apartmentsRoutes = Router();

const createApartmentController = new CreateApartmentController();
const listApartmentsController = new ListApartmentsController();
const findApartmentsByHotelController = new FindApartmentsByHotelController();

apartmentsRoutes.post(
  "/",
  ensureAuthenticated,
  createApartmentController.handle
);

apartmentsRoutes.get("/", listApartmentsController.handle);

apartmentsRoutes.get("/:hotel_id", findApartmentsByHotelController.handle);

export { apartmentsRoutes };
