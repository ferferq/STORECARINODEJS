"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificationRoutes = void 0;
var express_1 = require("express");
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var CreateSpecificationController_1 = require("../modules/cars/useCase/createSpecification/CreateSpecificationController");
var specificationRoutes = (0, express_1.Router)();
exports.specificationRoutes = specificationRoutes;
var createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController();
specificationRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);
//# sourceMappingURL=specification.routes.js.map