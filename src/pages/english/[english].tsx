import Head from "next/head";
import { useRouter } from "next/router";
import { fonts } from "~/fonts/fonts";
import { api } from "~/utils/api";
import { EntrySchemaType } from "~/utils/dictionary";

interface IPageProps {
  english: string;
}

export default function Page() {
  const router = useRouter();
  const props: IPageProps = router.query;
  const res = api.dictionary.get.useQuery({
    english: props.english,
  });

  return (
    <>
      <Head>
        <title>{props.english}</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Word entry={res.data?.results} />
    </>
  );
}

const Word = (props: { entry?: EntrySchemaType }) => {
  if (props.entry === undefined) {
    return (
      <p className="text-5xl font-bold text-gray-900 dark:text-white">
        Word not found...
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-8">
      <p className="text-5xl font-bold text-gray-900 dark:text-white">
        {props.entry.english}
      </p>
      <p className="text-5xl text-gray-900 dark:text-white">
        <span className={fonts.estrangeloEdessa.className}>
          {props.entry.syriac}
        </span>
      </p>
    </div>
  );
};
