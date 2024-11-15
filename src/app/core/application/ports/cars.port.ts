import {IVehicleResponse, IVehiclesRequest, IVehiclesResponse } from "../dto/cars/getAllCars.dto";

export interface PCars{
    getCars({page,size}:IVehiclesRequest):Promise<IVehiclesResponse>

    getCarById(id:number):Promise<IVehicleResponse>

}