import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSessionService } from "../services/CreateSessionService";

class CreateSessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const createSessionService = container.resolve(CreateSessionService);

    const token = await createSessionService.execute({
      password,
      email,
    });

    return response.json(token);
  }
}

export { CreateSessionController };
