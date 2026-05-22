import api from "./axios.js";

export const getAllTweets = () => api.get("/v1/tweet/all");

export const getUserTweets = (userId) => api.get(`/v1/tweet/u/${userId}`);

export const deleteTweet = (tweetId) => api.delete(`/v1/tweet/delete/${tweetId}`);
