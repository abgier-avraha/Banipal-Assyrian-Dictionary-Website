import { useMemo, useState } from "react";
import { SearchSuggestions } from "./search-suggestions";

export function HeroSection() {
  const [query, setQuery] = useState("");
  const inputDirection = useMemo(() => {
    const code = query.charCodeAt(0);

    // Detect arabic or syriac in search input
    if (code >= 1536 && code <= 1871) {
      return "rtl";
    }

    return "ltr";
  }, [query]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
          {/* TODO: replace with a serif font */}
          BANIPAL
        </h1>
        <h2 className="text-3xl text-gray-900 dark:text-white md:text-4xl xl:text-5xl">
          English and Arabic to Assyrian Dictionary
        </h2>
        <h3 className="text-xl text-gray-900 dark:text-white md:text-2xl xl:text-3xl">
          By Awia Khnanya
        </h3>
      </div>

      <div className="flex flex-col gap-4">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-5 text-xl leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search in English, Assyrian or Arabic..."
          value={query}
          dir={inputDirection}
          onChange={(e) => setQuery(e.target.value)}
        />

        <SearchSuggestions query={query} />
      </div>
    </div>
  );
}
