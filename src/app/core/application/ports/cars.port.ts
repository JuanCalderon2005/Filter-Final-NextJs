import { ICarsRequest } from "../dto/cars/request.dto"
import { ICarsResponse } from "../dto/cars/response.dto"


export interface PCars{
    getCars({page,size}:ICarsRequest):Promise<ICarsResponse>

    // getCarById(id:number):Promise<IVehicleResponse>

}