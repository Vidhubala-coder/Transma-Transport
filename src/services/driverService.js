import { request } from './api';

export const getDriverProfile = async () => {
  return request('/driver/profile', 'GET');
};

export const updateDriverProfile = async (profileData) => {
  return request('/driver/profile', 'PUT', profileData);
};

export const getDriverStats = async () => {
  return request('/driver/stats', 'GET');
};

export const getDriverRating = async () => {
  return request('/driver/rating', 'GET');
};

export const uploadDocument = async (documentData) => {
  return request('/driver/documents', 'POST', documentData);
};