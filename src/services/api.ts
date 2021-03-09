import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.resolvaclub.com',
});

export const microServiceApi = axios.create({
  baseURL: 'https://api-consultoras.resolvaclub.com',
});

export default api;
