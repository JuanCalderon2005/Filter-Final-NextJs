import { ILoginRequestDto } from "../../core/application/dto/auth/login-request.dto";
import { ILoginResponse } from "../../core/application/dto/auth/login-response.dto";
import { PAuth } from "../../core/application/ports/auth.port";
import { HttpClient } from "../utils/client-http";

export class AuthService implements PAuth {
  private clientHttp: HttpClient;
  private basePath: string = "auth";

  constructor() {
    this.clientHttp = new HttpClient();
  }

  async login(req: ILoginRequestDto): Promise<ILoginResponse> {
    return this.clientHttp.post<ILoginResponse, ILoginRequestDto>(
      `${this.basePath}/login`,
      req
    );
  }
}
