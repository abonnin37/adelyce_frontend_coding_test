export enum DialogTypeEnum {
  Login = 'Connexion',
  Signup = 'Inscription'
}

export interface LoginPayload {
  username?: string;
  password?: string;
}

export interface SignupResponse {
  message: string;
  status: number;
}

export class Login {
  email?: string;
  token?: string;
}

export class LoginResponse {
  token?: string;
}

export class JwtDecoded {
  username?: string;
  roles?: string[];
}
