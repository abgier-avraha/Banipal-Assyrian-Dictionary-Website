"use client";

import { api } from "~/trpc/react";
import type { DefinitionResponseSchemaType } from "~/utils/definitions";
import type { EntrySchemaType } from "~/utils/dictionary";

export const EntryFetcher = (props: { english: string }) => {
	const [entry] = api.dictionary.get.useSuspenseQuery({
		english: props.english,
	});

	if (entry.word === undefined) {
		return (
			<p className="font-bold text-5xl text-gray-900 dark:text-white">
				Word not found...
			</p>
		);
	}
	return <Entry word={entry.word} definition={entry.definition} />;
};

const Entry = (props: {
	word: EntrySchemaType;
	definition: DefinitionResponseSchemaType;
}) => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col justify-between gap-8">
				<p className="text-5xl text-gray-900 dark:text-white">
					<span className="font-bold">{props.word.English}</span>
					<span className="ml-4 font-bold text-sm italic">eng</span>
				</p>
				{props.word.Överge && (
					// TODO: unhide later
					<p className="hidden font-bold text-5xl text-gray-900 dark:text-white">
						<span className="font-bold">{props.word.Överge}</span>
						<span className="ml-4 font-bold text-sm italic">swe</span>
					</p>
				)}
				<p className="text-right text-5xl text-gray-900 dark:text-white">
					<span className="mr-4 font-bold text-sm italic">syr</span>
					<span className={["weight-bold"].join(" ")}>{props.word.Syriac}</span>
				</p>
				<p className="text-right text-4xl text-gray-900 dark:text-white">
					<span className="mr-4 font-bold text-sm italic">ara</span>
					<span className={["weight-bold"].join(" ")}>{props.word.Arabic}</span>
				</p>
			</div>
			{props.definition?.meanings.map((m, meaningIndex) => (
				<div
					key={meaningIndex}
					className="text-base text-gray-900 dark:text-white"
				>
					<p className="mb-2 text-2xl">
						<span className="mr-4 font-bold text-2xl">
							Meaning {meaningIndex + 1}
						</span>
						<span className="text-base italic">{m.partOfSpeech}</span>
					</p>
					<ul className="ml-4 list-disc">
						{m.definitions.map((d, defIndex) => (
							<li key={defIndex}>{d.definition}</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};
