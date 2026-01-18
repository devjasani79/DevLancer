import apiClient from "../utils/apiClient";

export const purchaseAPI = {
  createOrder: (orderData: any) => apiClient.post("/api/v1/purchase/create", orderData),
  getOrderHistory: () => apiClient.get("/api/v1/purchase/history"),
  updateOrderStatus: (orderId: string, status: string) => apiClient.put(`/api/v1/purchase/${orderId}`, { status }),
};
