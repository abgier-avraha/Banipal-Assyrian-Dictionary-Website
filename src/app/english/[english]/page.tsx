import Head from "next/head";
import { EntryFetcher } from "~/app/components/entry-fetcher";
import { api } from "~/trpc/server";

export async function generateMetadata(props: { params: Promise<IPageProps> }) {
	const params = await props.params;
	const assyrianTranslation = await api.dictionary.get({
		english: decodeURIComponent(params.english),
	});

	return {
		title: `${assyrianTranslation.word?.English} | ${assyrianTranslation.word?.Syriac}`,
		description: "Banipal English and Arabic to Assyrian Dictionary",
	};
}

interface IPageProps {
	english: string;
}

export default async function Page(props: { params: Promise<IPageProps> }) {
	const params = await props.params;
	const decoded = decodeURIComponent(params.english);

	await api.dictionary.get.prefetch({
		english: decoded,
	});

	return (
		<>
			<Head>
				<title>{decoded}</title>
				<meta name="viewport" content="width=device-width" />
			</Head>
			<EntryFetcher english={decoded} />
		</>
	);
}
