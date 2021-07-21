import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../errors/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../repositories/IUsersRepository";

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    console.log(userAlreadyExists);

    if (userAlreadyExists) {
      throw new AppError("User already exists", 401);
    }

    const passwordHash = await hash(password, 12);
    console.log("teste");

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserService };
