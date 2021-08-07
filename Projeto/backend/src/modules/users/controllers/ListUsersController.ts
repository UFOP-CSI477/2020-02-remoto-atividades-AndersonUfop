import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersService } from "../services/ListUsersService";
import usersView from "../views/users.view";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersService = container.resolve(ListUsersService);

    const all = await listUsersService.execute();

    return response.json(usersView.renderMany(all));
  }
}

export { ListUsersController };
