import { CreateSessionController } from "@modules/users/controllers/CreateSessionController";
import { Router } from "express";

const sessionsRoutes = Router();

const createSessionsController = new CreateSessionController();

sessionsRoutes.post("/sessions", createSessionsController.handle);

export { sessionsRoutes };
