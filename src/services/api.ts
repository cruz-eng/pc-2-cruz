import axios from "axios";
import { getToken, removeToken } from "../utils/auth";

const envBase = (import.meta.env.VITE_API_BASE_URL as string) || "";
const baseURL = envBase.length > 0 ? envBase : "/api";

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    const url = error?.config?.url ?? "";

    if (status === 401 || status === 403) {
      if (url.endsWith("/auth/login")) {
        return Promise.reject(new Error("Usuario o contraseña incorrectos"));
      }
      removeToken();
      return Promise.reject(new Error("Sesión expirada. Vuelve a iniciar sesión."));
    }
    if (status === 404) return Promise.reject(new Error("Recurso no encontrado"));
    if (status === 400) return Promise.reject(new Error("Datos inválidos. Revisa los campos."));
    if (status === 409) return Promise.reject(new Error("El usuario o correo ya existe"));
    if (status >= 500) return Promise.reject(new Error("Error interno del servidor"));

    return Promise.reject(error);
  }
);
export default api;