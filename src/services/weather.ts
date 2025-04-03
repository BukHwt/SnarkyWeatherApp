import axios from 'axios';

const access_key = 'c4a10532884c6c8d3c45c6ef966da966';
const base_url = 'http://api.weatherstack.com/current';
const query = '48187';

export const fetchWeather = async (): Promise<any> => {
  try {
    console.log('Fetching weather data...');
    const response = await axios.get(
      `${base_url}?access_key=${access_key}&query=${query}`,
    );
    console.log('Weather data fetched successfully:', response.data);
    return response.data;
  } catch (err) {
    console.error('Error fetching weather data:', err);
  }
};
