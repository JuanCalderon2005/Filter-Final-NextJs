export interface User {
    email: string;
    id: number;
  }
  
  export interface Data {
    access_token: string;
    user: User;
  }
  
  export interface ILoginResponse {
    statusCode: number;
    message: string;
    data: Data;
  }
  