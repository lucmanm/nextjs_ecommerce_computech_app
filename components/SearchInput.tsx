"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter()

  const onSearch = (event: FormEvent) => {
    event.preventDefault();

    const encodeedSearchQuery = encodeURI(searchQuery);
    router.push(`search?q=${encodeedSearchQuery}`)
    
    console.log("Query", );
  };

  return (
    <form onSubmit={onSearch}>
      <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Search
      </label>
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          type="search"
          id="default-search"
          className="block w-full rounded-full border-gray-500 bg-slate-100 py-2 pl-10 text-gray-950 focus:border-blue-950"
          placeholder="Search Model, Product, etc..."
          required
        />
        <button
          type="submit"
          className="absolute right-1 top-1 rounded-full bg-blue-950 px-4 py-1 text-center font-medium text-white hover:bg-gray-200 hover:font-medium hover:text-blue-950 focus:font-medium focus:text-blue-950 focus:outline-none focus:ring-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
