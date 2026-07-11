import api from "./api";
import type { LoginRequest, RegisterRequest, AuthResponse } from "../types/authTypes";

export function login(data: LoginRequest) {
  return api.post<AuthResponse>("/auth/login", data).then((r) => r.data);
}

export function register(data: RegisterRequest) {
  return api.post<AuthResponse>("/users/register", data).then((r) => r.data);
}
