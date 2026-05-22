import api from "./axios.js";

export const getLikedVideos = () => api.get("/v1/like/videos");

export const getLikedTweets = () => api.get("/v1/like/tweets");

export const toggleVideoLike = (videoId) =>
  api.post(`/v1/like/toggle/v/${videoId}`);

export const toggleTweetLike = (postId) =>
  api.post(`/v1/like/toggle/t/${postId}`);
