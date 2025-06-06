import axios from 'axios';

const API_URL = 'http://localhost:4000/api/bebidas';

export const getBebidas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener bebidas:', error);
    throw error;
  }
};

export const createBebida = async (bebida) => {
  try {
    const response = await axios.post(API_URL, bebida);
    return response.data;
  } catch (error) {
    console.error('Error al crear bebida:', error);
    throw error;
  }
};