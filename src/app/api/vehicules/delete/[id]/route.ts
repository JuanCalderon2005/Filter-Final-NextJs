import { VehiclesServices } from "@/src/app/infrastructure/services/vehicles.service";
import { NextResponse } from "next/server";

export default async function DELETE(request: Request,
    { params }: { params: Promise<{ id: number }> }) {

    try {
        const useDeleteCar = new VehiclesServices();
        const id = (await params).id;
        const response = await useDeleteCar.deleteCar(id);
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json(error, { status: 500 });
    }
    
}
