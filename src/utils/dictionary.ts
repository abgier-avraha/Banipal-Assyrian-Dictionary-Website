import Fuse from "fuse.js";
import { z } from "zod";
import { CsvParser } from "~/utils/csv-parser";

interface IDictionary {
  load: (csv: string) => void;
  // Search and english word and return an array of syriac words
  fuzzySearch: (query: string) => EntrySchemaType[];
}

const entrySchema = z.object({
  english: z.string(),
  syriac: z.string(),
  grammar: z.string().optional(),
});

export type EntrySchemaType = z.infer<typeof entrySchema>;

export class Dictionary implements IDictionary {
  private fuse = new Fuse<EntrySchemaType>([]);
  private isLoaded = false;

  load(csv: string): void {
    // Load csv
    const parser = new CsvParser();

    const parsed = parser.parse(csv, entrySchema);

    // Load dictionary entries into Fuse engine
    this.fuse = new Fuse(parsed, {
      includeScore: true,
      keys: ["english", "syriac", "grammar"],
      threshold: 0.1,
    });

    this.isLoaded = true;
    return;
  }

  fuzzySearch(query: string): EntrySchemaType[] {
    if (!this.isLoaded) {
      throw new Error("Dictionary has not yet been loaded.");
    }

    const res = this.fuse.search(query, {
      limit: 5,
    });

    return res.map((i) => i.item);
  }
}
