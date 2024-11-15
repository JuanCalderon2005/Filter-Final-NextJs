import { CreateCarResponse } from "../../core/application/dto/cars/create/response.dto";
import { DeleteCarResponseDto } from "../../core/application/dto/cars/delete/response.dto";
import { PutCarRequest } from "../../core/application/dto/cars/put/request.dto";
import { PutCarResponse } from "../../core/application/dto/cars/put/response.dto";
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
      const response = await this.clientHttp.get<ICarsResponse>(
        `vehicles?page=${page}&size=${size}`
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createCar(card: FormData): Promise<CreateCarResponse> {
    try {
      const response = await this.clientHttp.post<CreateCarResponse, FormData>(
        `vehicles`,
        card,
        true
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteCar(id: number): Promise<DeleteCarResponseDto> {
    try {
      const response = await this.clientHttp.delete<DeleteCarResponseDto>(
        `vehicles/${id}`
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async editCar(id: number, card: PutCarRequest): Promise<PutCarResponse> {
    try {
      const response = await this.clientHttp.put<PutCarResponse, PutCarRequest>(
        `vehicles/${id}`,
        card
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
