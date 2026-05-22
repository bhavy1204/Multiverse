import api from "./axios.js";

export const getVideoComments = (videoId, config) =>
  api.get(`/v1/comment/v/${videoId}`, config);

export const addComment = (body) => api.post("/v1/comment/v", body);

export const deleteComment = (commentId) =>
  api.delete(`/v1/comment/c/${commentId}`);

export const updateComment = (commentId, body) =>
  api.patch(`/v1/comment/c/${commentId}`, body);
