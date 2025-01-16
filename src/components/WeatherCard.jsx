import React from 'react'

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
          <div className="flex items-center mb-6">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-24 h-24"
            />
            <div className="ml-6">
              <h1 className="text-6xl font-bold">{Math.round(weatherData.main.temp)}°C</h1>
              <h2 className="text-2xl font-semibold">{weatherData.weather[0].main}</h2>
            </div>
          </div>
          <div className="text-center mb-6">
            <p className="text-lg font-medium">Location: {weatherData.name}, {weatherData.sys.country}</p>
          </div>
          <div className="flex justify-between w-full mb-4">
            <div className="text-center">
              <h4 className="text-lg font-medium">Humidity</h4>
              <p className="text-xl font-bold">{weatherData.main.humidity}%</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium">Wind Speed</h4>
              <p className="text-xl font-bold">{weatherData.wind.speed} m/s</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium">Pressure</h4>
              <p className="text-xl font-bold">{weatherData.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherCard
