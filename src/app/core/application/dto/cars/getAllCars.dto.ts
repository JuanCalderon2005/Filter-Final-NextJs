export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  photo: string | null;
}

export interface Metadata {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface ICarsRequest {
  page: number;
  size: number;
}

export interface IVehiclesResponse {
  statusCode: number;
  message: string;
  data: Vehicle[];
  metadata: Metadata;
}
