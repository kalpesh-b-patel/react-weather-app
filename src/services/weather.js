import axios from 'axios';
export default class Weather {
  APIKEY = '***';
  BASEURL = 'https://api.openweathermap.org/data/2.5/weather';

  getWeather = async (searchTerm) => {
    try {
      const result = await axios.get(
        `${this.BASEURL}?q=${searchTerm}&appid=${this.APIKEY}`
      );
      return result.data;
    } catch (err) {
      return null;
    }
  };
}
