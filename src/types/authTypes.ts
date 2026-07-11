export interface LoginRequest {
  email?: string;
  username?: string;
  password: string;
}

export interface RegisterRequest {
  email?: string;
  username?: string;
  fullName?: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}
