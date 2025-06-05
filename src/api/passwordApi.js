import axios from 'axios';
import { API_URL } from '../constants/API_URL';

const authHeaders = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found, authentication required');
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
};


export const savePassword = async ( body ) => {
    console.log('body peticion '. body);
  const response = await axios.post(`${API_URL}/passwords/create`, body, authHeaders());
  return response.data;
};

export const getPasswords = async () => {
  const response = await axios.get(`${API_URL}/passwords/`, authHeaders());
  return response.data; 
};

export const getPassword = async (site) => {
  const response = await axios.get(`${API_URL}/passwords/${site}`, authHeaders());
  return response.data;
};

export const validateAccessKey = async (accessKey) => {
  const response = await axios.post(`${API_URL}/passwords/validate-access-key`, {
    accessKey,
  }, authHeaders());
  return response.data; // devuelve { valid: true/false }
};
