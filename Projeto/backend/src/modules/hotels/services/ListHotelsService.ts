import { inject, injectable } from "tsyringe";

import { Hotel } from "../entities/Hotel";
import { IHotelsRepository } from "../repositories/IHotelsRepository";

interface IRequest {
  city?: string;
  pool?: string;
  wifi?: string;
  parking?: string;
  breakfast?: string;
}

@injectable()
class ListHotelsService {
  constructor(
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute({
    city,
    pool,
    wifi,
    parking,
    breakfast,
  }: IRequest): Promise<Hotel[]> {
    const users = await this.hotelsRepository.list(
      city,
      pool,
      wifi,
      parking,
      breakfast
    );

    return users;
  }
}

export { ListHotelsService };
