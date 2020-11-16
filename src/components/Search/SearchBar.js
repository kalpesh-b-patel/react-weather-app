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

  const getWeather = async () => {
    setLoading(true);
    setWeatherData(await weather.getWeather(searchTerm));
    setLoading(false);
  };

  return (
    <div className='search'>
      <input type='text' value={searchTerm} onChange={onInputChange} />
      <button type='button' onClick={getWeather} className='submit'>
        Search
      </button>
      <br />

      {loading ? (
        <h1>Loading...</h1>
      ) : Object.keys(weatherData).length !== 0 ? (
        <WeatherCard weatherData={weatherData} />
      ) : null}
    </div>
  );
};

export default SearchTerm;
