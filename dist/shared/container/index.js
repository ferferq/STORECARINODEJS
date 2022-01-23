"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UsersRepository_1 = require("../../modules/accounts/repositories/implementations/UsersRepository");
var CategoriesRepository_1 = require("../../modules/cars/repositories/implementations/CategoriesRepository");
var SpecificationRepository_1 = require("../../modules/cars/repositories/implementations/SpecificationRepository");
tsyringe_1.container.registerSingleton("CategoriesRepository", CategoriesRepository_1.CategoriesRepository);
tsyringe_1.container.registerSingleton("SpecificationRepository", SpecificationRepository_1.SpecificationRepository);
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
//# sourceMappingURL=index.js.map