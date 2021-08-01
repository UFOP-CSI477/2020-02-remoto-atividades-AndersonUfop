import { CreateReserveController } from "@modules/reserves/controllers/CreateReserveController";
import { FindByReservesController } from "@modules/reserves/controllers/FindByReservesController";
import { FindReserveByApartmentController } from "@modules/reserves/controllers/FindReserveByApartmentController";
import { FindReserveByIdController } from "@modules/reserves/controllers/FindReserveByIdController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const reservesRoutes = Router();

const createReserveController = new CreateReserveController();
const findByReservesController = new FindByReservesController();
const findReserveByIdController = new FindReserveByIdController();
const findReserveByApartmentController = new FindReserveByApartmentController();

reservesRoutes.post("/", ensureAuthenticated, createReserveController.handle);
reservesRoutes.get("/", ensureAuthenticated, findByReservesController.handle);
reservesRoutes.get(
  "/:id",
  ensureAuthenticated,
  findReserveByIdController.handle
);
reservesRoutes.get(
  "/apartment/:id",
  ensureAuthenticated,
  findReserveByApartmentController.handle
);

export { reservesRoutes };
