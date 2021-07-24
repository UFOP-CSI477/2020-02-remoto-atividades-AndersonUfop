import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadHotelImagesService } from "../services/UploadHotelImagesService";

interface IFiles {
  filename: string;
}

class UploadHotelImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadHotelImagesService = container.resolve(
      UploadHotelImagesService
    );

    const images_name = images.map((file) => file.filename);

    await uploadHotelImagesService.execute({
      hotel_id: id,
      images_name,
    });

    return response.status(201).send();
  }
}

export { UploadHotelImagesController };
