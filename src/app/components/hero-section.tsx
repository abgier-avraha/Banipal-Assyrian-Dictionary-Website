"use client";

import { useMemo, useState } from "react";
import { Unicode } from "~/utils/unicode";
import { SearchSuggestions } from "./search-suggestions";

export function HeroSection() {
	const [query, setQuery] = useState("");
	const inputDirection = useMemo(() => {
		const alphabet = Unicode.detectAlphabet(query);

		// Detect arabic or syriac in search input
		if (alphabet === "syr" || alphabet === "ara") {
			return "rtl";
		}

		return "ltr";
	}, [query]);

	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-5xl text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
					{/* TODO: replace with a serif font */}
					BANIPAL
				</h1>
				<h2 className="text-3xl text-gray-900 md:text-4xl xl:text-5xl dark:text-white">
					English and Arabic to Assyrian Dictionary
				</h2>
				<h3 className="text-gray-900 text-xl md:text-2xl xl:text-3xl dark:text-white">
					By Awia Oraha
				</h3>
			</div>

			<div className="flex flex-col gap-4">
				<input
					className="w-full appearance-none rounded border border-1 border-gray-300 bg-white px-5 py-3 text-xl leading-tight shadow-md focus:shadow-outline focus:outline-none"
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
