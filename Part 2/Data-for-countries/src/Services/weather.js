import axios from 'axios';

// Reads the key you set in PowerShell (must be prefixed with VITE_ to be available in the client)
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getByCoords = (lat, lon) => {
  if (!API_KEY) {
    return Promise.reject(new Error('VITE_WEATHER_API_KEY is not set in the environment'));
  }
  const url = `${BASE_URL}?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}&units=metric&appid=${API_KEY}`;
  return axios.get(url).then((res) => res.data);
};

const getByCity = (city) => {
  if (!API_KEY) {
    return Promise.reject(new Error('VITE_WEATHER_API_KEY is not set in the environment'));
  }
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  return axios.get(url).then((res) => res.data);
};

export default { getByCoords, getByCity };