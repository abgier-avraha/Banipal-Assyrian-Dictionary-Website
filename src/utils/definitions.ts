import { z } from "zod";

class Definitions {
  async get(word: string): Promise<DefinitionResponseSchemaType> {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
        word
      )}`
    );
    const parsed = (await res.json()) as DefinitionResponseSchemaType[];

    if (parsed.length === 0) {
      throw new Error("No definition found");
    }

    return parsed[0] as DefinitionResponseSchemaType;
  }
}

export const definitions = new Definitions();

const definitionResponseSchema = z.object({
  word: z.string(),
  phonetic: z.string(),
  phonetics: z.array(
    z.object({
      text: z.string(),
      audio: z.string().optional(),
    })
  ),
  origin: z.string(),
  meanings: z.array(
    z.object({
      partOfSpeech: z.string(),
      definitions: z.array(
        z.object({
          definition: z.string(),
          example: z.string(),
          synonyms: z.array(z.string()),
          antonyms: z.array(z.string()),
        })
      ),
    })
  ),
});

type DefinitionResponseSchemaType = z.infer<typeof definitionResponseSchema>;
