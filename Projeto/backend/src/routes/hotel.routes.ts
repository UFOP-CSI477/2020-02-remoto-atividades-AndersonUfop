import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateHotelController } from "../modules/hotels/controllers/CreateHotelController";
import { ListHotelsController } from "../modules/hotels/controllers/ListHotelsController";
import { UploadHotelImagesController } from "../modules/hotels/controllers/UploadHotelImagesController";

const hotelsRoutes = Router();

const createHotelsController = new CreateHotelController();
const listHotelsController = new ListHotelsController();
const uploadHotelImagesController = new UploadHotelImagesController();

const upload = multer(uploadConfig.upload("./tmp/hotel"));

hotelsRoutes.post("/", ensureAuthenticated, createHotelsController.handle);

hotelsRoutes.get("/", listHotelsController.handle);

hotelsRoutes.post(
  "/images/:id",
  upload.array("images"),
  uploadHotelImagesController.handle
);

export { hotelsRoutes };
