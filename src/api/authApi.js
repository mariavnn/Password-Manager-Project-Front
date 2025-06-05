import axios from 'axios';
import { API_URL } from '../constants/API_URL';

export const login = async (body) => {
    const response = await axios.post(`${API_URL}/auth/login`, body);
    const { token } = response.data;
    if (token) {
        localStorage.setItem('token', token);
    }
    return response.data;
};

export const register = async (body) => {
  const response = await axios.post(`${API_URL}/auth/register`, body);
  return response.data;
};
