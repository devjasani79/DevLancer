import apiClient from "../utils/apiClient";

interface SendMessageData {
  content?: string;
  nonce?: string;
  data?: string; // cipher
  imageUrl?: string;
}

export const chatAPI = {
  sendMessage: (messageData: SendMessageData) => apiClient.post("/api/v1/chat/send", messageData),
  getMessages: (chatId: string) => apiClient.get(`/api/v1/chat/${chatId}`),
  getChatList: () => apiClient.get("/api/v1/chat/list"),
};
