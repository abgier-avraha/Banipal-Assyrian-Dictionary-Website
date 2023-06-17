import * as fs from "fs";
import { z } from "zod";
import DictionaryCsv from "~/dictionary.csv";
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
  const dictionary = new Dictionary();
  dictionary.load(fs.readFileSync(DictionaryCsv).toString());
  return dictionary;
}
