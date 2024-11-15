import { ICarsRequest, IVehiclesResponse } from "../dto/cars/getAllCars.dto";

export interface PCars{
    getCars({page,size}:ICarsRequest):Promise<IVehiclesResponse>

}