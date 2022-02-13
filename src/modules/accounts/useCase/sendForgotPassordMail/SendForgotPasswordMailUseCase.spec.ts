import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepository";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/In-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProvider: MailProviderInMemory;

describe("Send forgot password", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    mailProvider = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  });
  it("should be able to send a forget password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "645542",
      email: "gojis@jid.tn",
      name: "Lydia Vega",
      password: "02303836",
    });

    await sendForgotPasswordMailUseCase.exec("gojis@jid.tn");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.exec("gadez@burihja.ax")
    ).rejects.toEqual(new AppError("User does not exists"));
  });

  it("should be able to create an usars tokens", async () => {
    const generateTokenMail = jest.spyOn(
      usersTokensRepositoryInMemory,
      "create"
    );

    await usersRepositoryInMemory.create({
      driver_license: "852254",
      email: "jipaj@amuoma.sb",
      name: "Marcus Weaver",
      password: "02303836",
    });

    await sendForgotPasswordMailUseCase.exec("jipaj@amuoma.sb");

    expect(generateTokenMail).toHaveBeenCalled();
  });
});
