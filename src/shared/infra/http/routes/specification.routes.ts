import { Router } from "express";

import { CreateSpecificationController } from "../../../../modules/cars/useCase/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

// specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post(
  "/",
  ensureAuthenticated,
  ensureIsAdmin,
  createSpecificationController.handle
);

export { specificationRoutes };
