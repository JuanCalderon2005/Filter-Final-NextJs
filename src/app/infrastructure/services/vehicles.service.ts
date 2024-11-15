import { CreateCarRequest } from "../../core/application/dto/cars/create/request.dto";
import { CreateCarResponse } from "../../core/application/dto/cars/create/response.dto";
import { ICarsRequest } from "../../core/application/dto/cars/request.dto";
import { ICarsResponse } from "../../core/application/dto/cars/response.dto";
import { PCars } from "../../core/application/ports/cars.port";
import { HttpClient } from "../utils/client-http";

export class VehiclesServices implements PCars {
  private clientHttp: HttpClient;

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async getCars({ page, size }: ICarsRequest): Promise<ICarsResponse> {
      try {
        const response = await this.clientHttp.get<ICarsResponse>(`vehicles?page=${page}&size=${size}`);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
  }

  async createCar(card: CreateCarRequest): Promise<CreateCarResponse> {
    try {
      const response = await this.clientHttp.post<CreateCarResponse,CreateCarRequest>(`vehicles`, card);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
