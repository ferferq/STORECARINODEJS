import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { IUsersRepositoryDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute(user: IUsersRepositoryDTO): Promise<void> {
    const { password, email } = user;

    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("User Already Exists");
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      ...user,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
