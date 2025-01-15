import React, {useState} from "react";

function Search() {
const [search, setSearch] = useState('');
const [weatherData, setWeatherData] = useState(null);
  
  const handleSearch = async() => {
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
    
    } catch (error) {
      console.log('error fetching data', error);
    }
  }

  return (
    <>
      <div className="h-16 bg-indigo-700 flex items-center justify-center">
        <div className="relative flex items-center">
          <svg
            className="absolute left-3 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-96 h-10 rounded-l-md bg-white outline-none pl-10 pr-3"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={handleSearch} className="h-10 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;