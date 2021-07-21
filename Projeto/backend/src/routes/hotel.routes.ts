import { Router } from "express";

import { CreateHotelController } from "../modules/hotels/controllers/CreateHotelController";

const hotelsRoutes = Router();

const createHotelsController = new CreateHotelController();

hotelsRoutes.post("/", createHotelsController.handle);

export { hotelsRoutes };
