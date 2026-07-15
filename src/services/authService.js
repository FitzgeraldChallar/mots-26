import api from "./api";

export async function login(username, password) {
  const response = await api.post("/token/", {
    username,
    password,
  });

  const { access, refresh } = response.data;

  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);

  return response.data;
}

export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
}

export function isAuthenticated() {
  return !!localStorage.getItem("access");
}

export function getAccessToken() {
  return localStorage.getItem("access");
}

