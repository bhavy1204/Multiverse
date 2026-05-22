import api from "./axios.js";

export const getChannelVideos = (userId) =>
  api.get(`/v1/dashboard/getChannelVideo/${userId}`);
