import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateApartmentController } from "../modules/hotels/controllers/CreateApartmentController";

const apartmentsRoutes = Router();

const createApartmentController = new CreateApartmentController();

apartmentsRoutes.use(ensureAuthenticated);
apartmentsRoutes.post("/", createApartmentController.handle);

export { apartmentsRoutes };
