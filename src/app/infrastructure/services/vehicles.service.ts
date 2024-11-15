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

  // async getCarById(id: number): Promise<IVehicleResponse> {
  //   try {
  //     const response = await this.clientHttp.get<IVehiclesResponse>(`/vehicles/${id}`);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
}
