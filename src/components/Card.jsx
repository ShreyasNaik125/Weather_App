import React, { useState } from 'react';
import config from '../config';

const Card = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityname, setCityname] = useState("Mumbai");

  const fetchWeatherData = async (city) => {

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  const onClickFunction = () => {
    fetchWeatherData(cityname);
  };

  const handleChange = (event) => {
    setCityname(event.target.value);
  };

  return (
    <div className="card">
      <input
        type="text"
        className='cityname'
        placeholder='Enter Name of a City'
        onChange={handleChange}
        value={cityname}
      />
      <button onClick={onClickFunction}>Search</button><br /><br />
      {weatherData && (
        <>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
          <h2>{weatherData.main.temp}°C</h2>
          <p>City Name: {weatherData.name}</p>
          <p>Feels like: {weatherData.main.feels_like}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </>
      )}
    </div>
  );
};

export default Card;
