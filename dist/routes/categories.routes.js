"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouters = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var CreateCategoryController_1 = require("../modules/cars/useCase/createCategory/CreateCategoryController");
var ImportCategoriesController_1 = require("../modules/cars/useCase/importCategories/ImportCategoriesController");
var ListCategoriesController_1 = require("../modules/cars/useCase/listCategories/ListCategoriesController");
var categoriesRouters = (0, express_1.Router)();
exports.categoriesRouters = categoriesRouters;
var upload = (0, multer_1.default)({
    dest: "./tmp",
});
var createCategoryController = new CreateCategoryController_1.CreateCategoryController();
var listCategoriesController = new ListCategoriesController_1.ListCategoriesController();
var importCategoriesController = new ImportCategoriesController_1.ImportCategoriesController();
categoriesRouters.post("/", createCategoryController.handle);
categoriesRouters.get("/", listCategoriesController.handle);
categoriesRouters.post("/import", upload.single("file"), importCategoriesController.handle);
//# sourceMappingURL=categories.routes.js.map