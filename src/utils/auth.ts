const TOKEN_KEY = "token";

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export const saveToken = setToken;

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn() {
  return getToken() !== null;
}
