import { CreateCarResponse } from "../dto/cars/create/response.dto"
import { DeleteCarResponseDto } from "../dto/cars/delete/response.dto"
import { ICarsRequest } from "../dto/cars/request.dto"
import { ICarsResponse } from "../dto/cars/response.dto"


export interface PCars{
    getCars({page,size}:ICarsRequest):Promise<ICarsResponse>

    createCar(card:FormData):Promise<CreateCarResponse>

    deleteCar(id:number):Promise<DeleteCarResponseDto>

}