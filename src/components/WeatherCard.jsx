import React from 'react'

function WeatherCard() {
  return (
    <>
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="flex flex-col items-center bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
          <div className="flex items-center mb-6">
            <img
              src="https://www.weatherbit.io/static/img/icons/r01d.png"
              alt="weather icon"
              className="w-24 h-24"
            />
            <div className="ml-6">
              <h1 className="text-6xl font-bold">20°C</h1>
              <h2 className="text-2xl font-semibold">Rainy</h2>
            </div>
          </div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium">Tuesday, 2 March 2021</h3>
            <p className="text-lg font-medium">Location: New York, USA</p>
          </div>
          <div className="flex justify-between w-full mb-4">
            <div className="text-center">
              <h4 className="text-lg font-medium">Humidity</h4>
              <p className="text-xl font-bold">80%</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium">Wind Speed</h4>
              <p className="text-xl font-bold">10 km/h</p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium">Pressure</h4>
              <p className="text-xl font-bold">1013 hPa</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherCard
