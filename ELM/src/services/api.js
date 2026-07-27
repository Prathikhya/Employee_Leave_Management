import axios from "axios";

const api = axios.create({
  baseURL: "https://employee-leave-management-iy0j.onrender.com" || "http://localhost:8080",
});

const publicAuthRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password", "/auth/reset-password"];

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const url = config.url || "";
  const isPublicAuthRequest = publicAuthRoutes.some((route) => url.includes(route));

  if (token && !isPublicAuthRequest) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  return config;
});

export default api;