interface IDictionary {
  load: (csv: string) => void;
  // Search and english word and return an array of syriac words
  fuzzySearch: (query: string) => IDictionaryEntry[];
}

interface IDictionaryEntry {
  english: string;
  syriac: string[];
}

export class Dictionary implements IDictionary {
  private isLoaded = false;

  load(csv: string): void {
    // TODO:

    // Load indexing through Fuse
    // const fuse = new Fuse(dictionaryCsv, {
    //   keys: ["english", "syriac"],
    // });

    this.isLoaded = true;
    return;
  }

  fuzzySearch(query: string): IDictionaryEntry[] {
    if (!this.isLoaded) {
      throw new Error("Dictionary has not yet been loaded.");
    }
    // TODO:
    return [];
  }
}
