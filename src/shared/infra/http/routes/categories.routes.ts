import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../../../../modules/cars/useCase/createCategory/CreateCategoryController";
import { ImportCategoriesController } from "../../../../modules/cars/useCase/importCategories/ImportCategoriesController";
import { ListCategoriesController } from "../../../../modules/cars/useCase/listCategories/ListCategoriesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureIsAdmin,
  createCategoryController.handle
);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  ensureAuthenticated,
  ensureIsAdmin,
  importCategoriesController.handle
);

export { categoriesRoutes };
