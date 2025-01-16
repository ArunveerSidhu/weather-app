import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const getWeather = async (city) => {
  try {
    const response = await axios.get(`${baseURL}weather?q=${city}&units=metric&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch weather data');
    }
    throw new Error('Network error occurred');
  }
} 

export { getWeather };
