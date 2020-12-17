import axios from 'axios';
export default class Weather {
  APIKEY = '3f3e5ac78183639205fb9d0532713201';
  BASEURL = 'https://api.openweathermap.org/data/2.5/weather';

  getWeather = async (searchTerm) => {
    try {
      const params = {
        q: searchTerm,
        appid: this.APIKEY,
      };
      const result = await axios.get(this.BASEURL, { params });
      return {
        success: true,
        data: result.data,
        error: '',
      };
    } catch (err) {
      return {
        success: false,
        data: null,
        error: 'Oops! Something went wrong!',
      };
    }
  };
}
