import { CreateCarResponse } from "../dto/cars/create/response.dto";

export interface PRegisterCar {
    register(req:FormData): Promise<CreateCarResponse>
}