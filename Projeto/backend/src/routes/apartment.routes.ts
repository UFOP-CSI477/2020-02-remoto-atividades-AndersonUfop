import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateApartmentController } from "../modules/hotels/controllers/CreateApartmentController";
import { FindApartmentsByHotelController } from "../modules/hotels/controllers/FindApartmentsByHotelController";
import { ListApartmentsController } from "../modules/hotels/controllers/ListApartmentsController";
import { UploadApartmentImagesController } from "../modules/hotels/controllers/UploadApartmentImagesController";

const apartmentsRoutes = Router();

const createApartmentController = new CreateApartmentController();
const listApartmentsController = new ListApartmentsController();
const findApartmentsByHotelController = new FindApartmentsByHotelController();
const uploadApartmentImagesController = new UploadApartmentImagesController();

const upload = multer(uploadConfig.upload("./tmp/apartment"));

apartmentsRoutes.post(
  "/",
  ensureAuthenticated,
  createApartmentController.handle
);

apartmentsRoutes.get("/find/", listApartmentsController.handle);

apartmentsRoutes.get("/:hotel_id", findApartmentsByHotelController.handle);

apartmentsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  upload.array("images"),
  uploadApartmentImagesController.handle
);

export { apartmentsRoutes };
