import { injectable, inject } from "tsyringe";

import { ICreateCarSpecificationsDTO } from "@modules/cars/dtos/ICreateCarSpecificationsDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateCarSpecificationsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async exec({
    car_id,
    specifications_id,
  }: ICreateCarSpecificationsDTO): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not Exists");
    }

    const specifications = await this.specificationRepository.findByIds(
      specifications_id
    );

    carExists.specifications = specifications;

    const car = await this.carsRepository.create(carExists);

    return car;
  }
}

export { CreateCarSpecificationsUseCase };
