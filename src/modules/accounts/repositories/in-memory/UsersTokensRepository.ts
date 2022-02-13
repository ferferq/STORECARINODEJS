import { IUsersTokensDTO } from "@modules/accounts/dtos/IUsersTokensDTO";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";

import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  userTokens: UserTokens[] = [];

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: IUsersTokensDTO): Promise<UserTokens> {
    const userToken = new UserTokens();

    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id,
    });

    this.userTokens.push(userToken);

    return userToken;
  }
  async findByUserIdAndToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    return this.userTokens.find(
      (userToken) =>
        userToken.user_id === user_id &&
        userToken.refresh_token === refresh_token
    );
  }
  async deleteById(id: string): Promise<void> {
    const findIndex = this.userTokens.findIndex(
      (userToken) => userToken.id === id
    );
    this.userTokens.splice(findIndex);
  }
  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    return this.userTokens.find(
      (userToken) => userToken.refresh_token === refresh_token
    );
  }
}

export { UsersTokensRepositoryInMemory };
