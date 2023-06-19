import { useState } from "react";
import { SearchSuggestions } from "./search-suggestions";

// TODO: use and set query parameters for searching MAYBE...

export function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
          {/* TODO: replace with a serif font */}
          BANIPAL
        </h1>
        <h2 className="text-3xl text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
          Assyrian Dictionary
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter a word in English...."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <SearchSuggestions query={query} />
      </div>
    </div>
  );
}
