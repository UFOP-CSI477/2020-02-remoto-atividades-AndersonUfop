import { inject, injectable } from "tsyringe";

import { Hotel } from "../entities/Hotel";
import { IHotelsRepository } from "../repositories/IHotelsRepository";

@injectable()
class ListHotelsService {
  constructor(
    @inject("HotelsRepository")
    private hotelsRepository: IHotelsRepository
  ) {}

  async execute(): Promise<Hotel[]> {
    const users = await this.hotelsRepository.list();

    return users;
  }
}

export { ListHotelsService };
