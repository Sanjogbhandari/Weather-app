import React, { useState, useEffect } from 'react';
import Weather from "./components/Weather";


const Homepage = () => {
  const [location, setLocation] = useState(localStorage.getItem('location') || 'Kathmandu');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    localStorage.setItem('location', location);
  }, [location]);

  useEffect(() => {
    const apiKey = '44cd4dd0f50b9bf1fcdb178a442cbcac';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then((res) => {
        if (!res.ok) throw new Error('City not found');
        return res.json();
      })
      .then((data) => {
        setWeatherData({
          city: location,
          temperature: data.main.temp,
          description: data.weather[0].description,
        });
      })
      .catch(() => {
        setWeatherData({
          city: location,
          temperature: 'N/A',
          description: 'Unable to fetch weather data.',
        });
      });
  }, [location]);

  return (
    <div>
      <h1>WEATHER APP</h1>
      <select value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="Kathmandu">Kathmandu</option>
        <option value="Texas">Texas</option>
        <option value="Moscow">Moscow</option>
        <option value="Delhi">Delhi</option>
        <option value="Sydney">Sydney</option>
        <option value="Paris">Paris</option>
      </select>
      <div className="weather-container">
        <Weather weatherData={weatherData} />
      </div>
    </div>
  );
};

export default Homepage;
