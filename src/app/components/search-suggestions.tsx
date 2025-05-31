"use client";

import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { api } from "~/trpc/react";

export function SearchSuggestions(props: { query: string }) {
	const debouncedSearchQuery = useDebounce(props.query, 200);
	const res = api.dictionary.search.useQuery({ query: debouncedSearchQuery });

	return (
		res.data?.results &&
		res.data.results.length > 0 && (
			<div
				style={{ width: "100%" }}
				className="z-10 w-full divide-y overflow-clip rounded-lg border"
			>
				{res.data.results.map((r) => (
					<Link
						key={r.English}
						className="flex flex-col justify-between border-gray-300 bg-white p-4 hover:bg-indigo-50 md:flex-row"
						href={`/english/${encodeURIComponent(r.English)}`}
					>
						<div className="flex flex-col gap-1">
							<p className="">
								<span className="font-medium">{r.English}</span>
								<span className="ml-2 text-sm italic">eng</span>
							</p>

							{r.Överge && (
								// TODO: unhide later
								<p className="hidden font-medium">
									<span>{r.Överge}</span>
									<span className="ml-2 text-sm italic">swe</span>
								</p>
							)}
						</div>
						<div className="flex flex-col gap-1">
							<p className="text-right">
								<span className="mr-2 text-sm italic">syr</span>
								<span className="font-medium">{r.Syriac}</span>
							</p>

							<p className="text-right">
								<span className="mr-2 text-sm italic">ara</span>
								<span className="font-medium">{r.Arabic}</span>
							</p>
						</div>
					</Link>
				))}
			</div>
		)
	);
}
