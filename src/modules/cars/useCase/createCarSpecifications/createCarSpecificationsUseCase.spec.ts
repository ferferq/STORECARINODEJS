import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationsUseCase } from "./createCarSpecificationsUseCase";

let createCarSpecificationsUseCase: CreateCarSpecificationsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create Car Specifications", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationRepositoryInMemory = new SpecificationRepositoryInMemory();
    createCarSpecificationsUseCase = new CreateCarSpecificationsUseCase(
      carsRepositoryInMemory,
      specificationRepositoryInMemory
    );
  });

  it("should not be able to add a new specification to a now-existent car", async () => {
    const car_id = "1234";
    const specifications_id = ["1235463"];

    await expect(
      createCarSpecificationsUseCase.exec({ car_id, specifications_id })
    ).rejects.toEqual(new AppError("Car does not Exists"));
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name test car",
      description: "Description test car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    const specification = await specificationRepositoryInMemory.create({
      name: "name specifications test",
      description: "description specifications test",
    });

    const carSpecification = await createCarSpecificationsUseCase.exec({
      car_id: car.id,
      specifications_id: [specification.id],
    });

    expect(carSpecification).toHaveProperty("specifications");
    expect(carSpecification.specifications.length).toBe(1);
  });
});
