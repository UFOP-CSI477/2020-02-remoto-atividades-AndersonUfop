import { Router } from "express";

import { CreateSessionController } from "../modules/users/controllers/CreateSessionController";

const sessionsRoutes = Router();

const createSessionsController = new CreateSessionController();

sessionsRoutes.post("/sessions", createSessionsController.handle);

export { sessionsRoutes };
