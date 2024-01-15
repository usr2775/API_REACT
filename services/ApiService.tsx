import axios from 'axios';

const baseURL = 'http://172.16.100.93:8888';
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const registerUser = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post('/users/register', { name, email, password });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const loginUser = async (name: string, password: string) => {
  try {
    const response = await api.post('/users/login', { name, password });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { registerUser, loginUser };