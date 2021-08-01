import uploadConfig from "@config/upload";
import { CreateHotelController } from "@modules/hotels/controllers/CreateHotelController";
import { ListHotelsController } from "@modules/hotels/controllers/ListHotelsController";
import { UploadHotelImagesController } from "@modules/hotels/controllers/UploadHotelImagesController";
import { Router } from "express";
import multer from "multer";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const hotelsRoutes = Router();

const createHotelsController = new CreateHotelController();
const listHotelsController = new ListHotelsController();
const uploadHotelImagesController = new UploadHotelImagesController();

const upload = multer(uploadConfig.upload("./tmp/hotel"));

hotelsRoutes.post("/", ensureAuthenticated, createHotelsController.handle);

hotelsRoutes.get("/", listHotelsController.handle);

hotelsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  upload.array("images"),
  uploadHotelImagesController.handle
);

export { hotelsRoutes };
