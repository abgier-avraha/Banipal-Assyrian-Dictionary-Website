import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import * as fs from "fs";
import dictcsv from "~/dictionary.csv";
import { CsvParser } from "~/utils/csv-parser";

const dictionary = initDictionary();

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
});

function initDictionary() {
  const parser = new CsvParser();

  const file = fs.readFileSync(dictcsv).toString();

  const schema = z.object({
    english: z.string(),
    syriac: z.string(),
    grammar: z.string().optional(),
  });

  const parsed = parser.parse(file, schema);

  // TODO: remove
  console.log("parsed", parsed);

  // TODO: load parsed data into dictionary class
  // TODO: rename api to dictionary api
  // TODO: provide fuzzy search api
}
