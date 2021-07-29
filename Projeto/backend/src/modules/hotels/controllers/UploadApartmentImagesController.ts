import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadApartmentImagesService } from "../services/UploadApartmentImagesService";

interface IFiles {
  filename: string;
}

class UploadApartmentImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadApartmentImagesService = container.resolve(
      UploadApartmentImagesService
    );

    const images_name = images.map((file) => file.filename);

    await uploadApartmentImagesService.execute({
      apartment_id: id,
      images_name,
    });

    return response.status(201).send();
  }
}

export { UploadApartmentImagesController };
