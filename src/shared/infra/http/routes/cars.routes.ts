import { Router } from "express";

import { CreateCarController } from "@modules/cars/useCase/createCar/CreateCarController";
import { CreateCarSpecificationsController } from "@modules/cars/useCase/createCarSpecifications/createCarSpecificationsController";
import { ListAvailableCarsController } from "@modules/cars/useCase/listAvailableCars/listAvailableCarsController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListAvailableCarsController();
const createCarSpecificationsController =
  new CreateCarSpecificationsController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureIsAdmin,
  createCarController.handle
);

carsRoutes.get("/available", listCarsController.handle);

carsRoutes.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureIsAdmin,
  createCarSpecificationsController.handle
);

export { carsRoutes };
