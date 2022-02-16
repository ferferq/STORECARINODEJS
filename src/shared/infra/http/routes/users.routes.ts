import { Router } from "express";
import multer from "multer";

import { ProfileUserController } from "@modules/accounts/useCase/profileUser/ProfileUserController";

import uploadConfig from "../../../../config/upload";
import { CreateUserController } from "../../../../modules/accounts/useCase/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/useCase/updateUserAvatar/UpdateUserAvatarCotroller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const userRoutes = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const profileUserController = new ProfileUserController();

userRoutes.post("/", createUserController.handle);

userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

userRoutes.get("/", ensureAuthenticated, profileUserController.handle);

export { userRoutes };
