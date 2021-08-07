import { CreateApartmentController } from "@modules/apartments/controllers/CreateApartmentController";
import { FindApartmentsByHotelController } from "@modules/apartments/controllers/FindApartmentsByHotelController";
import { FindApartmentsByHotelAvailableController } from "@modules/apartments/controllers/FindApartmentsHotelAvailableController";
import { FindByPriceApartmentsController } from "@modules/apartments/controllers/FindByPriceApartmentsController";
import { ListApartmentsController } from "@modules/apartments/controllers/ListApartmentsController";
import { ListImagesByApartmentController } from "@modules/apartments/controllers/ListImagesByApartmentController";
import { UploadApartmentImagesController } from "@modules/apartments/controllers/UploadApartmentImagesController";
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const apartmentsRoutes = Router();

const createApartmentController = new CreateApartmentController();
const listApartmentsController = new ListApartmentsController();
const findApartmentsByHotelController = new FindApartmentsByHotelController();
const uploadApartmentImagesController = new UploadApartmentImagesController();
const findApartmentsByHotelAvailableController =
  new FindApartmentsByHotelAvailableController();
const findByPriceApartmentsController = new FindByPriceApartmentsController();
const listImagesByApartmentController = new ListImagesByApartmentController();

const upload = multer(uploadConfig);

apartmentsRoutes.post(
  "/",
  ensureAuthenticated,
  createApartmentController.handle
);

apartmentsRoutes.get("/find/", listApartmentsController.handle);

apartmentsRoutes.get("/filter/", findByPriceApartmentsController.handle);

apartmentsRoutes.get("/:hotel_id", findApartmentsByHotelController.handle);

apartmentsRoutes.get(
  "/images/:apartment_id",
  listImagesByApartmentController.handle
);

apartmentsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  upload.array("images"),
  uploadApartmentImagesController.handle
);

apartmentsRoutes.get(
  "/hotel/:hotel_id",
  findApartmentsByHotelAvailableController.handle
);

export { apartmentsRoutes };
