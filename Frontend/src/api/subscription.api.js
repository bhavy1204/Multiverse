import api from "./axios.js";

export const getSubscribedChannels = (subscriberId) =>
  api.get(`/v1/subscription/u/getSubscribed/${subscriberId}`);

export const toggleSubscribe = (channelId) =>
  api.post(`/v1/subscription/toggleSubscribe/${channelId}`);

export const getSubscriptionStatus = (channelId) =>
  api.get(`/v1/subscription/status/${channelId}`);
