import api from "./axios.js";

export const getWatchHistory = () => api.get("/v1/users/watchHistory");

export const addToWatchHistory = (videoId) =>
  api.post(`/v1/users/addToWatchHistory/${videoId}`);

export const removeFromWatchHistory = (videoId) =>
  api.delete(`/v1/users/removeFromWatchHistory/${videoId}`);

export const getUserChannelProfile = (username) =>
  api.get(`/v1/users/c/${username}`);
