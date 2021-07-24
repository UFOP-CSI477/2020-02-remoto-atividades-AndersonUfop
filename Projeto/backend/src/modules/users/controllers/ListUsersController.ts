import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersService = container.resolve(ListUsersService);

    const all = await listUsersService.execute();

    return response.json(all);
  }
}

export { ListUsersController };
