import * as fs from "node:fs";
import path from "node:path";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { definitions } from "~/utils/definitions";
import { Dictionary } from "~/utils/dictionary";

const dictionary = initDictionary();

export const dictionaryRouter = createTRPCRouter({
	search: publicProcedure
		.input(z.object({ query: z.string() }))
		.query(({ input }) => {
			return {
				results: dictionary.fuzzySearch(input.query),
			};
		}),
	get: publicProcedure
		.input(z.object({ english: z.string() }))
		.query(async ({ input }) => {
			return {
				word: dictionary.getWord({ english: input.english }),
				definition: await definitions.get(input.english),
			};
		}),
});

function initDictionary() {
	const dictionaryPath = path.join(process.cwd(), "src", "dictionary.csv");

	const dictionary = new Dictionary().load(
		fs.readFileSync(dictionaryPath).toString(),
	);

	return dictionary;
}
