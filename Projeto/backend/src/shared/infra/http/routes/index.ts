import { Router } from "express";

import { apartmentsRoutes } from "./apartment.routes";
import { hotelsRoutes } from "./hotel.routes";
import { reservesRoutes } from "./reserves.routes";
import { sessionsRoutes } from "./sessions.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/hotels", hotelsRoutes);
routes.use("/users", usersRoutes);
routes.use("/apartments", apartmentsRoutes);
routes.use("/reserves", reservesRoutes);
routes.use(sessionsRoutes);

export { routes };
