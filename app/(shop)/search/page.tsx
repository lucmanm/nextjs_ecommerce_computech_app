"use client";

import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const search = useSearchParams();
  // const searchQuery  = search?.get("q") or below
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  console.log(encodedSearchQuery);

  return (
    <section>
      Search Page
      <br />
      {search}
    </section>
  );
};

export default SearchPage;
