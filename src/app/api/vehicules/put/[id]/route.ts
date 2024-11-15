import { PutCarRequest } from "@/src/app/core/application/dto/cars/put/request.dto";
import { VehiclesServices } from "@/src/app/infrastructure/services/vehicles.service";
import { NextResponse } from "next/server";


export async function PUT(request: Request,
    { params }: { params: Promise<{ id: number }> }) {
    try {
        const body: PutCarRequest = await request.json();
        const useEditProject = new VehiclesServices();
        const id = (await params).id
        const editProject = await useEditProject.editCar(id, body);

        return NextResponse.json(editProject, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}