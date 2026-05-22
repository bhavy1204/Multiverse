import api from "./axios.js";

export const toggleVideoDislike = (videoId) =>
  api.post(`/v1/dislike/toggle/v/${videoId}`);
