import { Request, Response } from "express";
import { container } from "tsyringe";

import { IUsersRepositoryDTO } from "@modules/accounts/dtos/ICreateUserDTO";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name, driver_license, password }: IUsersRepositoryDTO =
      request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    await createUserUseCase.execute({ email, name, driver_license, password });

    return response.status(201).send();
  }
}

export { CreateUserController };
