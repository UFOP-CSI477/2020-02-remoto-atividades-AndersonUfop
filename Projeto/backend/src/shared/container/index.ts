import { container } from "tsyringe";

import { IApartmentsImagesRepository } from "../../modules/hotels/repositories/IApartmentsImagesRepository";
import { IApartmentsRepository } from "../../modules/hotels/repositories/IApartmentsRepository";
import { IHotelsImagesRepository } from "../../modules/hotels/repositories/IHotelsImagesRepository";
import { IHotelsRepository } from "../../modules/hotels/repositories/IHotelsRepository";
import { ApartmentsImagesRepository } from "../../modules/hotels/repositories/implementations/ApartmentsImagesRepository";
import { ApartmentsRepository } from "../../modules/hotels/repositories/implementations/ApartmentsRepository";
import { HotelsImagesRepository } from "../../modules/hotels/repositories/implementations/HotelsImagesRepository";
import { HotelsRepository } from "../../modules/hotels/repositories/implementations/HotelsRepository";
import { ReservesRepository } from "../../modules/reserves/repositories/implementations/ReservesRepository";
import { IReservesRepository } from "../../modules/reserves/repositories/IReservesRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { IDateProvider } from "./providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "./providers/DateProvider/implementations/DayjsDateProvider";

container.registerSingleton<IHotelsRepository>(
  "HotelsRepository",
  HotelsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IHotelsImagesRepository>(
  "HotelsImagesRepository",
  HotelsImagesRepository
);

container.registerSingleton<IApartmentsRepository>(
  "ApartmentsRepository",
  ApartmentsRepository
);

container.registerSingleton<IApartmentsImagesRepository>(
  "ApartmentsImagesRepository",
  ApartmentsImagesRepository
);

container.registerSingleton<IReservesRepository>(
  "ReservesRepository",
  ReservesRepository
);

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
