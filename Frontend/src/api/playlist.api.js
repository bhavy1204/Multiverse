import api from "./axios.js";

export const getUserPlaylists = (userId) =>
  api.get(`/v1/playlist/u/getplaylist/${userId}`);

export const getPlaylistById = (playlistId) =>
  api.get(`/v1/playlist/getplaylist/${playlistId}`);

export const createPlaylist = (body) => api.post("/v1/playlist/create", body);

export const deletePlaylist = (playlistId) =>
  api.delete(`/v1/playlist/p/delete/${playlistId}`);

export const addVideoToPlaylist = (playlistId, videoId) =>
  api.patch(`/v1/playlist/p/addVideo/${playlistId}/${videoId}`);

export const removeVideoFromPlaylist = (playlistId, videoId) =>
  api.patch(`/v1/playlist/p/removeVideo/${playlistId}/${videoId}`);
