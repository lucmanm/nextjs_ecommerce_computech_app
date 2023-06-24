import React from "react";

const SearchInput = () => {
  return (
    <div>
      <form>
        <label
          for="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 pl-10 text-sm text-gray-900 focus:border-blue-950 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-950 dark:focus:ring-blue-950"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="absolute right-1 top-1 rounded-lg bg-blue-950 px-2 py-1 text-sm font-medium text-white hover:bg-gray-200 hover:font-medium hover:text-blue-950 focus:font-medium focus:text-blue-950 focus:outline-none focus:ring-2  dark:bg-blue-950 dark:hover:bg-blue-950 dark:focus:ring-blue-950">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
