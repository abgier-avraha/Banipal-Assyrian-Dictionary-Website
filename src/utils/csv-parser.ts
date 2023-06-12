import { type ZodRawShape, type z } from "zod";

interface ICsvParser {
  parse: <T extends ZodRawShape>(
    csv: string,
    schema: z.ZodObject<T>
  ) => z.infer<typeof schema>;
}

export class CsvParser implements ICsvParser {
  parse<T extends ZodRawShape>(
    csv: string,
    schema: z.ZodObject<T>
  ): z.infer<typeof schema> {
    // TODO: implement parser
    // TODO: use zod to validate schema
    // schema.parse will throw an error if the input doesn't match the schema
    const parsed = schema.parse({});
    return parsed;
  }
}
