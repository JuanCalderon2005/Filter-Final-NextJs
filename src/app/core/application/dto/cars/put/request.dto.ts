export interface PutCarRequest {
  make: string;

  model: string;

  year: number;

  licensePlate: string;

  file?: File | null;
}
