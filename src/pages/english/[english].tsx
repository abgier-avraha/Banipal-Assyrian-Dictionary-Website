import Head from "next/head";
import { useAsync } from "react-async-hook";
import { useQueryParams } from "~/hooks/use-query-params";
import { api } from "~/utils/api";
import { definitions } from "~/utils/definitions";
import type { EntrySchemaType } from "~/utils/dictionary";

interface IPageProps {
  english: string;
}

export default function Page() {
  const params = useQueryParams<IPageProps>();

  const assyrianTranslationFetcher = api.dictionary.get.useQuery({
    english: params.english,
  });

  return (
    <>
      <Head>
        <title>{params.english}</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <>
        {assyrianTranslationFetcher.data?.results === undefined ? (
          <p className="text-5xl font-bold text-gray-900 dark:text-white">
            Word not found...
          </p>
        ) : (
          <Word entry={assyrianTranslationFetcher.data.results} />
        )}
      </>
    </>
  );
}

const Word = (props: { entry: EntrySchemaType }) => {
  const definitionFetcher = useAsync(
    async (req: string) => definitions.get(req),
    [props.entry?.English]
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 justify-between	">
        <p className="text-5xl text-gray-900 dark:text-white">
          <span className="font-bold">{props.entry.English}</span>
          <span className="text-sm font-bold italic ml-4">eng</span>
        </p>
        {props.entry.Överge && (
          // TODO: unhide later
          <p className="hidden text-5xl font-bold text-gray-900 dark:text-white">
            <span className="font-bold">
              {props.entry.Överge}
            </span>
            <span className="text-sm font-bold italic ml-4">swe</span>
          </p>
        )}
        <p className="text-right text-5xl text-gray-900 dark:text-white">
          <span className="text-sm font-bold italic mr-4">syr</span>
          <span className={["weight-bold"].join(" ")}>
            {props.entry.Syriac}
          </span>
        </p>
        <p className="text-right text-4xl text-gray-900 dark:text-white">
          <span className="text-sm font-bold italic mr-4">ara</span>
          <span className={["weight-bold"].join(" ")}>
            {props.entry.Arabic}
          </span>
        </p>
      </div>
      {definitionFetcher.result?.meanings.map((m, meaningIndex) => (
        <div
          key={meaningIndex}
          className="text-base text-gray-900 dark:text-white"
        >
          <p className="text-2xl mb-2">
            <span className="text-2xl font-bold mr-4">
              Meaning {meaningIndex + 1}
            </span>
            <span className="text-base italic">{m.partOfSpeech}</span>
          </p>
          <ul className="list-disc ml-4">
            {m.definitions.map((d, defIndex) => (
              <li key={defIndex}>{d.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
