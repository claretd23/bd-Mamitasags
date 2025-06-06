import axios from 'axios';

const API_URL = 'http://localhost:4000/api/events';

export const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener eventos:', error);
    throw error;
  }
};

export const createEvent = async (event) => {
  try {
    const response = await axios.post(API_URL, event);
    return response.data;
  } catch (error) {
    console.error('Error al crear evento:', error);
    throw error;
  }
};