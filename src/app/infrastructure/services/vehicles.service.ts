import { ICarsRequest, IVehiclesResponse } from "../../core/application/dto/cars/getAllCars.dto";
import { PCars } from "../../core/application/ports/cars.port";
import { HttpClient } from "../utils/client-http";

export class VehiclesServices implements PCars {
  private clientHttp: HttpClient;

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async getCars({ page, size }: ICarsRequest): Promise<IVehiclesResponse> {
      try {
        const response = await this.clientHttp.get<IVehiclesResponse>(`/vehicles?page=${page}&size=${size}`);
        return response;
      } catch (error) {
        console.log(error);
        throw error;
      }
  }
}
