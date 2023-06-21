import Link from "next/link";
import { fonts } from "~/fonts/fonts";
import { api } from "~/utils/api";

export function SearchSuggestions(props: { query: string }) {
  // TODO: request throttling/debouncing
  const res = api.dictionary.search.useQuery({ query: props.query });

  return (
    res.data?.results &&
    res.data.results.length > 0 && (
      <div className="z-10 w-full border divide-y rounded-lg overflow-clip">
        {res.data.results.map((r) => (
          <Link
            key={r.english}
            className="block p-2 bg-white hover:bg-indigo-50"
            href={`/english/${r.english}`}
          >
            <div>{r.english}</div>
            <div
              style={{ fontSize: 24 }}
              className={fonts.estrangeloEdessa.className}
            >
              {r.syriac}
            </div>
          </Link>
        ))}
      </div>
    )
  );
}
