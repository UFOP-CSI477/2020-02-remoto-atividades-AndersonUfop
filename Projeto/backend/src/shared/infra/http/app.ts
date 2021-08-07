import "reflect-metadata";

import uploadConfig from "@config/upload";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { routes } from "@shared/infra/http/routes";

import { AppError } from "../../errors/AppError";

import "@shared/infra/database";

import "@shared/container";

const app = express();

app.use(express.json());
app.use("/images/", express.static(uploadConfig.tmpFolder));
app.use(cors());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
