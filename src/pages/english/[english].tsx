import Head from "next/head";
import { useAsync } from "react-async-hook";
import { fonts } from "~/fonts/fonts";
import { useQueryParams } from "~/hooks/use-query-params";
import { api } from "~/utils/api";
import { definitions } from "~/utils/definitions";
import { EntrySchemaType } from "~/utils/dictionary";

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
    [props.entry?.english]
  );
  console.log(definitionFetcher.result);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between	">
        <p className="text-5xl text-center font-bold text-gray-900 dark:text-white">
          {props.entry.english}
        </p>
        <p className="text-5xl text-center text-gray-900 dark:text-white">
          <span className={fonts.estrangeloEdessa.className}>
            {props.entry.syriac}
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
          {m.definitions.map((d, defIndex) => (
            <p key={defIndex}>{d.definition}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
