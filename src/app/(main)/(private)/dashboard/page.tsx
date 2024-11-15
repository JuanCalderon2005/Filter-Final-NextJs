import { ICarsRequest } from "@/src/app/core/application/dto/cars/request.dto";
import { VehiclesServices } from "@/src/app/infrastructure/services/vehicles.service";
import MainPage from "@/src/ui/Templates/home/homeTemplate";


interface IProps {
    searchParams: ICarsRequest;
}

const useCarsService = new VehiclesServices();
export default async function DashboardPage({ searchParams }: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await useCarsService.getCars({page, size: 4});
    return (
        <>
            <MainPage data={data}/>
        </>
    );
}