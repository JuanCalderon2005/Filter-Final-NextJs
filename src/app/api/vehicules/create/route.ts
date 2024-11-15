import { VehiclesServices } from "@/src/app/infrastructure/services/vehicles.service";
import { NextResponse } from "next/server";

const useCreateVehicule = new VehiclesServices();
export async function POST(req: Request) {
    try {
        const formData = await req.formData();  
        const newUser = await useCreateVehicule.createCar(formData);

        return NextResponse.json(newUser, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}
