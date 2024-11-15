import { CreateCarRequest } from "@/src/app/core/application/dto/cars/create/request.dto";
import { VehiclesServices } from "@/src/app/infrastructure/services/vehicles.service";
import { NextResponse } from "next/server";

const useCreateVehicule = new VehiclesServices();

export default async function POST(req: Request) {
  try {
    const body: CreateCarRequest = await req.json();
    const response = await useCreateVehicule.createCar(body);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
