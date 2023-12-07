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

// Search queries will be made lower case and have their diacritics removed
interface DictionaryLookupEntry extends EntrySchemaType {
  EnglishLowerCase: string;
  SyriacWithoutDiacritics: string;
  ArabicWithoutDiacritics: string;
}

export class Dictionary implements IDictionary {
  private englishMap: Map<string, EntrySchemaType> = new Map();
  private dictionary: DictionaryLookupEntry[] = [];
  private isLoaded = false;

  load(csv: string) {
    // Load csv
    const parser = new CsvParser();

    // Load dictionary
    this.dictionary = parser.parse(csv, entrySchema).map((e) => ({
      ...e,
      SyriacWithoutDiacritics: this.removeSyriacDiacritics(e.Syriac),
      ArabicWithoutDiacritics: this.removeArabicDiacritics(e.Arabic),
      EnglishLowerCase: e.English.toLowerCase(),
    }));

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

    const simplifiedQuery = this.removeArabicDiacritics(
      this.removeSyriacDiacritics(query.toLowerCase())
    );

    const startsWith = this.dictionary.filter((w) => {
      return (
        w.ArabicWithoutDiacritics.startsWith(simplifiedQuery) ||
        w.EnglishLowerCase.startsWith(simplifiedQuery) ||
        w.SyriacWithoutDiacritics.startsWith(simplifiedQuery)
      );
    });

    const includes = this.dictionary.filter((w) => {
      return (
        w.ArabicWithoutDiacritics.includes(simplifiedQuery) ||
        w.EnglishLowerCase.includes(simplifiedQuery) ||
        w.SyriacWithoutDiacritics.includes(simplifiedQuery)
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

  private removeSyriacDiacritics(word: string): string {
    const syriacAlphabet = "ܐܒܓܕܗܘܙܚܛܝܟܠܡܢܣܥܦܨܩܪܫܬ";

    // Check if query is in Syriac before stripping diacritics
    if (!syriacAlphabet.split("").find((letter) => word.includes(letter))) {
      return word;
    }

    return word
      .split("")
      .map((letter) => {
        if (syriacAlphabet.includes(letter)) {
          return letter;
        }
        return "";
      })
      .join("");
  }

  private removeArabicDiacritics(word: string): string {
    const arabicAlphabet = "ابجدهوزحطيكلمنسعفصقرشتثخذضظغ";

    // Check if query is in Arabic before stripping diacritics
    if (!arabicAlphabet.split("").find((letter) => word.includes(letter))) {
      return word;
    }
    return word
      .split("")
      .map((letter) => {
        if (arabicAlphabet.includes(letter)) {
          return letter;
        }
        return "";
      })
      .join("");
  }
}

function onlyUnique(array: EntrySchemaType[]) {
  const map = new Map<string, EntrySchemaType>();
  array.forEach((a) => {
    map.set(a.English, a);
  });

  return Array.from(map.values());
}
