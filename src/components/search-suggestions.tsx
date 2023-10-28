import { useDebounce } from "@uidotdev/usehooks";
import Link from "next/link";
import { fonts } from "~/fonts/fonts";
import { api } from "~/utils/api";

export function SearchSuggestions(props: { query: string }) {
  const debouncedSearchQuery = useDebounce(props.query, 200)
  const res = api.dictionary.search.useQuery({ query: debouncedSearchQuery });

  return (
    res.data?.results &&
    res.data.results.length > 0 && (
      <div style={{ width: '100%' }} className="z-10 w-full border divide-y rounded-lg overflow-clip">
        {res.data.results.map((r) => (
          <Link
            key={r.English}
            className="flex flex-col md:flex-row justify-between p-4 bg-white hover:bg-indigo-50"
            href={`/english/${r.English}`}
          >
            <div className="flex flex-col gap-1">
              <p className="">
                <span className="font-medium">
                  {r.English}
                </span>
                <span className="text-sm ml-2 italic">eng</span>
              </p>

              {r.Överge && (
                // TODO: unhide later
                <p className="hidden font-medium">
                  <span className="">
                    {r.Överge}
                  </span>
                  <span className="text-sm ml-2 italic">swe</span>
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-right">
                <span className="text-sm mr-2 italic">syr</span>
                <span className={[fonts.estrangeloEdessa.className, "text-2xl"].join(" ")}>
                  {r.Syriac}
                </span>
              </p>

              <p className="text-right">
                <span className="text-sm mr-2 italic">ara</span>
                <span className={[fonts.notoSans.className, "text-xl"].join(" ")}>
                  {r.Arabic}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    )
  );
}
