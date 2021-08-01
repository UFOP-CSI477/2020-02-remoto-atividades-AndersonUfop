import { CreateUserController } from "@modules/users/controllers/CreateUserController";
import { ListUsersController } from "@modules/users/controllers/ListUsersController";
import { Router } from "express";

const usersRoutes = Router();

const createUsersController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", createUsersController.handle);
usersRoutes.get("/", listUsersController.handle);

export { usersRoutes };
