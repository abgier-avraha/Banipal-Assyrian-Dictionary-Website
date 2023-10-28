import Fuse from "fuse.js";
import { z } from "zod";
import { CsvParser } from "~/utils/csv-parser";

interface IDictionary {
  load: (csv: string) => void;
  // Search and english word and return an array of syriac words
  fuzzySearch: (query: string) => EntrySchemaType[];
  getWord: (word: { english: string }) => EntrySchemaType | undefined;
}

const entrySchema = z.object({
  English: z.string(),
  Överge: z.string().optional(),
  Syriac: z.string(),
  Arabic: z.string(),
});

export type EntrySchemaType = z.infer<typeof entrySchema>;

export class Dictionary implements IDictionary {
  private englishMap: Map<string, EntrySchemaType> = new Map();
  private fuse = new Fuse<EntrySchemaType>([]);
  private isLoaded = false;

  load(csv: string): void {
    // Load csv
    const parser = new CsvParser();

    const parsed = parser.parse(csv, entrySchema);

    // Setup map for exact lookup
    parsed.forEach((e) => {
      this.englishMap.set(e.English, e);
    });

    // Load dictionary entries into Fuse engine
    this.fuse = new Fuse(parsed, {
      includeScore: true,
      keys: ["English", "Överge", "Syriac", "Arabic"],
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

  getWord(word: { english: string }): EntrySchemaType | undefined {
    if (!this.isLoaded) {
      throw new Error("Dictionary has not yet been loaded.");
    }

    return this.englishMap.get(word.english);
  }
}
