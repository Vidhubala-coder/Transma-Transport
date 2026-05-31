import { request } from './api';

export const getAvailableLoads = async (filters = {}) => {
  const queryParams = new URLSearchParams(filters).toString();
  return request(`/loads/available?${queryParams}`, 'GET');
};

export const getLoadById = async (loadId) => {
  return request(`/loads/${loadId}`, 'GET');
};

export const acceptLoad = async (loadId) => {
  return request(`/loads/${loadId}/accept`, 'POST');
};

export const getMyLoads = async () => {
  return request('/loads/my-loads', 'GET');
};

export const getLoadHistory = async (filters = {}) => {
  const queryParams = new URLSearchParams(filters).toString();
  return request(`/loads/history?${queryParams}`, 'GET');
};

export const updateDeliveryStatus = async (loadId, statusData) => {
  return request(`/loads/${loadId}/status`, 'PUT', statusData);
};