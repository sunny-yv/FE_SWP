import axiosInstance from "../axios";
import { jwtDecode } from "jwt-decode";
import { AUTH_TOKEN_KEY } from "./constant";

const getUser = async () => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return null;
    const decoded = jwtDecode(token);
    const { data } = await axiosInstance.get(
      `/Accounts/${decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
    );
    return {
      ...decoded, //...lấy tất cả key trong object
      ...data,
    };
  } catch (error) {
    throw error;
  }
};
export const getOrders = async () => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return null;
    const decoded = jwtDecode(token);
    const { data } = await axiosInstance.get(`/Orders`);
    return data;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const { data } = await axiosInstance.post("/Auth/Login", {
      email,
      password,
    });
    const decoded = jwtDecode(data);
    localStorage.setItem(AUTH_TOKEN_KEY, data);

    const { data: account } = await axiosInstance.get(
      `/Accounts/${decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]}`
    );
    return {
      ...decoded,
      ...account,
    };
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
};

export const authService = {
  login,
  logout,
  getUser,
};
