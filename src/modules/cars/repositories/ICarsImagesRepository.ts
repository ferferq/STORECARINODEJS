import { CarsImage } from "../infra/typeorm/entities/CarsImage";

interface ICarsImagesRepository {
  create(car_id: string, image_name: string): Promise<CarsImage>;
}

export { ICarsImagesRepository };
