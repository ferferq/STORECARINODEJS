"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var upload_1 = __importDefault(require("../config/upload"));
var ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
var CreateUserController_1 = require("../modules/accounts/useCase/createUser/CreateUserController");
var UpdateUserAvatarCotroller_1 = require("../modules/accounts/useCase/updateUserAvatar/UpdateUserAvatarCotroller");
var userRouters = (0, express_1.Router)();
exports.userRouters = userRouters;
var uploadAvatar = (0, multer_1.default)(upload_1.default.upload("./tmp/avatar"));
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserAvatarController = new UpdateUserAvatarCotroller_1.UpdateUserAvatarController();
userRouters.post("/", createUserController.handle);
userRouters.patch("/avatar", ensureAuthenticated_1.ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);
//# sourceMappingURL=users.routes.js.map