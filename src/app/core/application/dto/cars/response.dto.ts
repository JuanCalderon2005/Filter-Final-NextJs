export interface Vehicle {
    id: number;
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    photo: string | null;
}

export interface ICarsResponse {
    statusCode: number;
    message: string;
    data: Vehicle[];
    metadata: {
        totalItems: number;
        itemCount: number;
        itemsPerPage: number;
        totalPages: number;
        currentPage: number;
    };
}