import { useState } from 'react';
import './SearchBar.css';
import Weather from '../../services/weather';
import WeatherCard from '../WeatherCard/WeatherCard';

const SearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const weather = new Weather();

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await weather.getWeather(searchTerm);

    if (result.success) {
      setWeatherData(result.data);
      setSearchTerm('');
    } else {
    }
    setLoading(false);
  };

  return (
    <form className='search' onSubmit={getWeather}>
      <input type='text' value={searchTerm} onChange={onInputChange} />
      {loading ? (
        <h1>Loading...</h1>
      ) : Object.keys(weatherData).length !== 0 ? (
        <WeatherCard weatherData={weatherData} />
      ) : null}
    </form>
  );
};

export default SearchTerm;
