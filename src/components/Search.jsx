import React from "react";

function Search() {
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
          />
          <button className="h-10 px-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;