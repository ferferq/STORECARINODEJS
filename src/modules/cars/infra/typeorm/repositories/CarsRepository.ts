import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { IListCarsDTO } from "@modules/cars/dtos/IListCarsDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create(carProps: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create(carProps);

    await this.repository.save(car);
    return car;
  }
  async findByLicensePlate(licensePlate: string): Promise<Car> {
    const car = await this.repository.findOne({
      license_plate: licensePlate,
    });

    return car;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne({
      id,
    });

    return car;
  }

  async findAvailable({
    brand,
    category_id,
    name,
  }: IListCarsDTO): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("c.brand = :brand", { brand });
    }

    if (category_id) {
      carsQuery.andWhere("c.category_id = :category_id", { category_id });
    }

    if (name) {
      carsQuery.andWhere("c.name = :name", { name });
    }

    const cars = await carsQuery.getMany();

    return cars;
  }
}

export { CarsRepository };
