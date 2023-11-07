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
  private dictionary: EntrySchemaType[] = [];
  private isLoaded = false;

  load(csv: string) {
    // Load csv
    const parser = new CsvParser();

    // Load dictionary
    this.dictionary = parser.parse(csv, entrySchema);

    // Setup map for exact lookup
    this.dictionary.forEach((e) => {
      this.englishMap.set(e.English, e);
    });

    this.isLoaded = true;
    return this;
  }

  fuzzySearch(query: string): EntrySchemaType[] {
    if (!this.isLoaded) {
      throw new Error("Dictionary has not yet been loaded.");
    }

    if (query === "") {
      return [];
    }

    const lowerCaseQuery = query.toLowerCase();

    const startsWith = this.dictionary.filter((w) => {
      return (
        w.Arabic.toLowerCase().startsWith(lowerCaseQuery) ||
        w.English.toLowerCase().startsWith(lowerCaseQuery) ||
        w.Syriac.toLowerCase().startsWith(lowerCaseQuery)
      );
    });

    const includes = this.dictionary.filter((w) => {
      return (
        w.Arabic.toLowerCase().includes(lowerCaseQuery) ||
        w.English.toLowerCase().includes(lowerCaseQuery) ||
        w.Syriac.toLowerCase().includes(lowerCaseQuery)
      );
    });

    return onlyUnique([...startsWith, ...includes]).slice(0, 5);
  }

  getWord(word: { english: string }): EntrySchemaType | undefined {
    if (!this.isLoaded) {
      throw new Error("Dictionary has not yet been loaded.");
    }

    return this.englishMap.get(word.english);
  }
}

function onlyUnique(array: EntrySchemaType[]) {
  const map = new Map<string, EntrySchemaType>();
  array.forEach((a) => {
    map.set(a.English, a);
  });

  return Array.from(map.values());
}
