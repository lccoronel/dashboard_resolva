import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.resolvaclub.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@ResolvaConsultant:token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
