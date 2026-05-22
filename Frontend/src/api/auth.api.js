import api from "./axios.js";

export const loginUser = (body) => api.post("/v1/users/login", body);

export const registerUser = (formData, config) =>
  api.post("/v1/users/register", formData, config);

export const googleAuthCallback = (body) =>
  api.post("/v1/auth/google/callback", body);

export const getAuthMe = (config) => api.get("/v1/users/authMe", config);

export const logoutUser = () => api.post("/v1/users/logout");

export const refreshToken = () => api.post("/v1/users/refreshToken");
