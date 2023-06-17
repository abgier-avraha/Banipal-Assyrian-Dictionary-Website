import Link from "next/link";
import { fonts } from "~/fonts/fonts";
import { api } from "~/utils/api";

export function SearchSuggestions(props: { query: string }) {
  const res = api.dictionary.search.useQuery({ query: props.query });

  return (
    res.data?.results &&
    res.data.results.length > 0 && (
      <div className="z-10 w-full border divide-y  bg-white rounded-lg">
        {res.data.results.map((r) => (
          <Link
            key={r.english}
            className="block p-2 hover:bg-indigo-50 ..."
            href={`/english/${r.english}`}
          >
            <div>{r.english}</div>
            <div
              style={{ fontSize: 24 }}
              className={fonts.estrangeloEdessa.className}
            >
              {r.syriac}
            </div>
            <div>{r.grammar}</div>
          </Link>
        ))}
      </div>
    )
  );
}
