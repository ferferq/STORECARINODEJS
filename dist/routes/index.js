"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authenticate_routes_1 = require("./authenticate.routes");
var categories_routes_1 = require("./categories.routes");
var specification_routes_1 = require("./specification.routes");
var users_routes_1 = require("./users.routes");
var router = (0, express_1.Router)();
exports.router = router;
router.use("/categories", categories_routes_1.categoriesRouters);
router.use("/specifications", specification_routes_1.specificationRoutes);
router.use("/users", users_routes_1.userRouters);
router.use(authenticate_routes_1.authenticateRouters);
//# sourceMappingURL=index.js.map