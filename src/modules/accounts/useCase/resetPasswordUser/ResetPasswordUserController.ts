import { Request, Response } from "express";
import { container } from "tsyringe";

import { ResetPasswordUserUseCase } from "./ResetPasswordUserUseCase";

interface IQuery {
  token?: string;
}

class ResetPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token }: IQuery = request.query;
    const { password } = request.body;

    const resetPasswordUserUseCase = container.resolve(
      ResetPasswordUserUseCase
    );
    await resetPasswordUserUseCase.execute({ token, password });

    return response.send();
  }
}

export { ResetPasswordController };
