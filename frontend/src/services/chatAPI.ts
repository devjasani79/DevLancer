import apiClient from "../utils/apiClient";

export const chatAPI = {
  sendMessage: (messageData) => apiClient.post("/api/v1/chat/send", messageData),
  getMessages: (chatId) => apiClient.get(`/api/v1/chat/${chatId}`),
  getChatList: () => apiClient.get("/api/v1/chat/list"),
};
