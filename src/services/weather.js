import axios from 'axios';
export default class Weather {
  APIKEY = '3f3e5ac78183639205fb9d0532713201';
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
