import './WeatherCard.css';
const WeatherCard = ({ weatherData }) => {
  const imgUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  return (
    <div className='weather'>
      <div className='weather__icon'>
        <img src={imgUrl} alt={weatherData.weather[0].description} />
      </div>
      <div className='weather__data'>
        <h3>{weatherData.name}</h3>
        <p>
          {Math.round((weatherData.main.temp - 273.15) * 1.8 + 32)} F |{' '}
          {Math.round(weatherData.main.temp - 273.15)} C
        </p>
        <p>{weatherData.weather[0].description}</p>
        <p>{weatherData.weather[0].main}</p>
      </div>
    </div>
  );
};
export default WeatherCard;
