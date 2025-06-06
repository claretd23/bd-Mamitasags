import axios from 'axios';

const API_URL = 'http://localhost:4000/api/trabajadores';

export const getTrabajadores = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener trabajadores:', error);
    throw error;
  }
};

export const createTrabajador = async (trabajador) => {
  try {
    const response = await axios.post(API_URL, trabajador);
    return response.data;
  } catch (error) {
    console.error('Error al crear trabajador:', error);
    throw error;
  }
};