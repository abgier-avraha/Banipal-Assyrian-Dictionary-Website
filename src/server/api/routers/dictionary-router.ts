import * as fs from "fs";
import path from "path";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
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
    .query(({ input }) => {
      return {
        results: dictionary.getWord({ english: input.english }),
      };
    }),
});

function initDictionary() {
  const dictionaryPath = path.join(process.cwd(), "src", "dictionary.csv");

  const dictionary = new Dictionary().load(
    fs.readFileSync(dictionaryPath).toString()
  );

  return dictionary;
}
