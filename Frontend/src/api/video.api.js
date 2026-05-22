import api from "./axios.js";

export const getAllVideos = (params, config) =>
  api.get(`/v1/video/get/all`, { params, ...config });

export const getVideosPaginated = (page, limit, config) =>
  api.get(`/v1/video/get/all?page=${page}&limit=${limit}`, config);

export const getVideoById = (videoId, config) =>
  api.get(`/v1/video/get/${videoId}`, config);

export const searchVideos = (query) =>
  api.get(`/v1/video/search?q=${encodeURIComponent(query)}`);

export const uploadVideo = (formData, config) =>
  api.post("/v1/video/v1/upload", formData, config);
