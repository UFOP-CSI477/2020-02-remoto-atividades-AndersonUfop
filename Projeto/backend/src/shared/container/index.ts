import { ApartmentsImagesRepository } from "@modules/apartments/infra/repositories/ApartmentsImagesRepository";
import { ApartmentsRepository } from "@modules/apartments/infra/repositories/ApartmentsRepository";
import { IApartmentsImagesRepository } from "@modules/apartments/repositories/IApartmentsImagesRepository";
import { IApartmentsRepository } from "@modules/apartments/repositories/IApartmentsRepository";
import { HotelsImagesRepository } from "@modules/hotels/infra/repositories/HotelsImagesRepository";
import { HotelsRepository } from "@modules/hotels/infra/repositories/HotelsRepository";
import { IHotelsImagesRepository } from "@modules/hotels/repositories/IHotelsImagesRepository";
import { IHotelsRepository } from "@modules/hotels/repositories/IHotelsRepository";
import { ReservesRepository } from "@modules/reserves/infra/repositories/ReservesRepository";
import { IReservesRepository } from "@modules/reserves/repositories/IReservesRepository";
import { UsersRepository } from "@modules/users/infra/repositories/UsersRepository";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { container } from "tsyringe";

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
