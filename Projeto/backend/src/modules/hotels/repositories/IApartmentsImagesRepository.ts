import { ApartmentImage } from "../entities/ApartmentImage";

interface IApartmentsImagesRepository {
  create(apartment_id: string, image_name: string): Promise<ApartmentImage>;
}

export { IApartmentsImagesRepository };
