import React from "react";

const SearchInput = () => {
  return (
      <form>
        <label
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Search
        </label>
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {/* <svg
              aria-hidden="true"
              className="h-5 w-5 text-gray-950 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg> */}
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full bg-slate-100 rounded-full pl-10 py-2 text-gray-950 focus:border-blue-950 border-gray-500"
            placeholder="Search Model, Product, etc..."
            required
          />
          <button
            type="submit"
            className="absolute right-1 top-1 rounded-full bg-blue-950 px-4 py-1 text-center font-medium text-white hover:bg-gray-200 hover:font-medium hover:text-blue-950 focus:font-medium focus:text-blue-950 focus:outline-none focus:ring-2 ">
            Search
          </button>
        </div>
      </form>
  );
};

export default SearchInput;
