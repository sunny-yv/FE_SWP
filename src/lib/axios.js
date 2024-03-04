import axios from "axios";
import { AUTH_TOKEN_KEY } from "./auth/constant";

const axiosInstance = axios.create({
  baseURL: "https://thecoffeeshopstore.azurewebsites.net/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
