import { Request, Response } from "express";
import { container } from "tsyringe";

import { IListCarsDTO } from "@modules/cars/dtos/IListCarsDTO";

import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase";

class ListAvailableCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, brand, category_id }: IListCarsDTO = request.query;

    const listAvailableCarsUseCase = container.resolve(
      ListAvailableCarsUseCase
    );

    const cars = await listAvailableCarsUseCase.execute({
      name,
      brand,
      category_id,
    });

    return response.json(cars);
  }
}

export { ListAvailableCarsController };
