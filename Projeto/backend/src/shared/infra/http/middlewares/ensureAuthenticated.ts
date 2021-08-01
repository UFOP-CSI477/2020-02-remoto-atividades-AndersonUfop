import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "14b55a4d354870da83dd42d6c53833c3"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exits", 401);
    }

    next();
  } catch {
    throw new AppError("Invalid token!", 401);
  }
}
