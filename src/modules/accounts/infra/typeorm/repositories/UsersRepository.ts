import { getRepository, Repository } from "typeorm";

import { IUsersRepositoryDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { IUsersRepository } from "../../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(user: IUsersRepositoryDTO): Promise<void> {
    const newUser = this.repository.create(user);

    await this.repository.save(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(user_id: string): Promise<User> {
    const user = await this.repository.findOne(user_id);

    return user;
  }
}

export { UsersRepository };
