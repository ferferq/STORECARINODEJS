import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { passwordRouter } from "./passoword.roures";
import { rentalRoutes } from "./rental.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/users", userRoutes);
router.use("/cars", carsRoutes);
router.use("/rental", rentalRoutes);
router.use("/password", passwordRouter);
router.use(authenticateRoutes);

export { router };
