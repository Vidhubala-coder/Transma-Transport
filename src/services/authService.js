import { request } from './api';

export const login = async (email, password) => {
  return request('/auth/login', 'POST', { email, password });
};

export const register = async (driverData) => {
  return request('/auth/register', 'POST', driverData);
};

export const verifyToken = async (token) => {
  return request('/auth/verify', 'GET');
};

export const logout = async () => {
  return request('/auth/logout', 'POST');
};

export const updateProfile = async (profileData) => {
  return request('/auth/profile', 'PUT', profileData);
};