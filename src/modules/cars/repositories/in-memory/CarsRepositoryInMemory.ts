import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { IListCarsDTO } from "@modules/cars/dtos/IListCarsDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create(carProps: ICreateCarDTO): Promise<Car> {
    const car = new Car();
    Object.assign(car, {
      ...carProps,
      created_at: new Date(),
    });

    this.cars.push(car);
    return car;
  }
  async findByLicensePlate(licensePlate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === licensePlate);
  }

  async findAvailable({
    brand,
    category_id,
    name,
  }: IListCarsDTO): Promise<Car[]> {
    const cars = this.cars.filter(
      (car) =>
        car.available &&
        ((!brand && !category_id && !name) ||
          car.brand === brand ||
          car.category_id === category_id ||
          car.name === name)
    );

    return cars;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((car) => car.id === id);
  }

  async updateAvailable(id: string, available: boolean): Promise<void> {
    const findIndex = this.cars.findIndex((car) => car.id === id);
    if (findIndex < 0) return;
    this.cars[findIndex].available = available;
  }
}

export { CarsRepositoryInMemory };
