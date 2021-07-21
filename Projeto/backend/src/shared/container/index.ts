import { container } from "tsyringe";

import { IHotelsRepository } from "../../modules/hotels/repositories/IHotelsRepository";
import { HotelsRepository } from "../../modules/hotels/repositories/implementations/HotelsRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<IHotelsRepository>(
  "HotelsRepository",
  HotelsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
