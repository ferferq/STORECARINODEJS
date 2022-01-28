import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/DayjsDateProvider";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvides: DayjsDateProvider;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayjsDateProvides = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvides
    );
  });

  it("should be able to create a new rental", async () => {
    const dayAdd24Hours = dayjsDateProvides.dateNowSomeDays(1);
    const rental = await createRentalUseCase.execute({
      user_id: "12345",
      car_id: "12121212",
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });
  it("should not be able to create a new rental if there is another open to the same user", async () => {
    expect(async () => {
      const dayAdd24Hours = dayjsDateProvides.dateNowSomeDays(1);
      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: "12121212",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: "132445444",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should not be able to create a new rental if there is another open to the same car", async () => {
    expect(async () => {
      const dayAdd24Hours = dayjsDateProvides.dateNowSomeDays(1);
      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: "12121212",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "12564",
        car_id: "12121212",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should not be able to create a new rental with invalid return time", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "12345",
        car_id: "12121212",
        expected_return_date: dayjsDateProvides.dateNow(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
