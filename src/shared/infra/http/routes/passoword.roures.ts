import { Router } from "express";

import { ResetPasswordController } from "@modules/accounts/useCase/resetPasswordUser/ResetPasswordUserController";
import { SendForgotPasswordMailController } from "@modules/accounts/useCase/sendForgotPassordMail/SendForgotPasswordMailController";

const passwordRouter = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post("/forgot", sendForgotPasswordMailController.handle);

passwordRouter.post("/reset", resetPasswordController.handle);

export { passwordRouter };
