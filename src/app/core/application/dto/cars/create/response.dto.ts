export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    photo: string | null;
}

export interface CreateCarResponse {
    statusCode: number;
    message: string;
    data: Car;
}