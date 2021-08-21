import uploadConfig from "@config/upload";
import { CreateHotelController } from "@modules/hotels/controllers/CreateHotelController";
import { FindHotelByIdController } from "@modules/hotels/controllers/FindHotelByIdController";
import { ListHotelsController } from "@modules/hotels/controllers/ListHotelsController";
import { UploadHotelImagesController } from "@modules/hotels/controllers/UploadHotelImagesController";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const hotelsRoutes = Router();

const createHotelsController = new CreateHotelController();
const listHotelsController = new ListHotelsController();
const findHotelByIdController = new FindHotelByIdController();
const uploadHotelImagesController = new UploadHotelImagesController();

const upload = multer(uploadConfig);

hotelsRoutes.post("/", ensureAuthenticated, createHotelsController.handle);

hotelsRoutes.get("/", listHotelsController.handle);

hotelsRoutes.get("/:hotel_id", findHotelByIdController.handle);

hotelsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  upload.array("images"),
  uploadHotelImagesController.handle
);

export { hotelsRoutes };
