import { Router } from "express";
import multer from "multer";

import { CreateCarController } from "@modules/cars/useCase/createCar/CreateCarController";
import { CreateCarSpecificationsController } from "@modules/cars/useCase/createCarSpecifications/createCarSpecificationsController";
import { ListAvailableCarsController } from "@modules/cars/useCase/listAvailableCars/listAvailableCarsController";
import { UploadCarImageController } from "@modules/cars/useCase/uploadCarImage/UploadCarImageController";

import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const uploadAvatar = multer(uploadConfig);

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListAvailableCarsController();
const createCarSpecificationsController =
  new CreateCarSpecificationsController();
const uploadCarImageController = new UploadCarImageController();

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

carsRoutes.post(
  "/images/:id",
  ensureAuthenticated,
  ensureIsAdmin,
  uploadAvatar.array("images"),
  uploadCarImageController.handle
);

export { carsRoutes };
