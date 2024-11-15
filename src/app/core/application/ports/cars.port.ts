import { CreateCarResponse } from "../dto/cars/create/response.dto";
import { DeleteCarResponseDto } from "../dto/cars/delete/response.dto";
import { PutCarRequest } from "../dto/cars/put/request.dto";
import { PutCarResponse } from "../dto/cars/put/response.dto";
import { ICarsRequest } from "../dto/cars/request.dto";
import { ICarsResponse } from "../dto/cars/response.dto";

export interface PCars {
  getCars({ page, size }: ICarsRequest): Promise<ICarsResponse>;

  createCar(card: FormData): Promise<CreateCarResponse>;

  deleteCar(id: number): Promise<DeleteCarResponseDto>;

  editCar(id: number, card: PutCarRequest): Promise<PutCarResponse>;
}
