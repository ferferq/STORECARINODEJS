"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRouters = void 0;
var express_1 = require("express");
var AuthenticateUserController_1 = require("../modules/accounts/useCase/authenticateUser/AuthenticateUserController");
var authenticateRouters = (0, express_1.Router)();
exports.authenticateRouters = authenticateRouters;
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
authenticateRouters.post("/sessions", authenticateUserController.handle);
//# sourceMappingURL=authenticate.routes.js.map