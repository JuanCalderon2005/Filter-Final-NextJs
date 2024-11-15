export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    photo: string | null;
}

export interface PutCarResponse {
    statusCode: number;
    message: string;
    data: Car;
}