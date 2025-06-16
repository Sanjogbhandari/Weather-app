import React from 'react';

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <p className="loading-message">Loading...</p>;
  }

  return (
    <div className="weather-box">
      <h2>Weather in {weatherData.city}</h2>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Description: {weatherData.description}</p>
    </div>
  );
};

export default Weather;
