export interface CreateCarRequest {
    make: string;
    model: string;
    year: number;
    licensePlate: string;
    photo: File;
}