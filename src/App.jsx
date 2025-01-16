import React, { useState } from 'react';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <Search onWeatherData={handleWeatherData} />
      <WeatherCard weatherData={weatherData} />
    </>
  );
}

export default App;
