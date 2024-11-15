import { MaintenanceResponseDto } from "../dto/cars/maintenance/response.dto";

export interface PManteinance{

    getManteinanceCar(id:number):Promise<MaintenanceResponseDto>
}