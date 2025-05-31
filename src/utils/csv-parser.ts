import { parse } from "csv-parse/sync";
import { type ZodRawShape, z } from "zod";

interface ICsvParser {
	parse: <T extends ZodRawShape>(
		csv: string,
		schema: z.ZodObject<T>,
	) => Array<z.infer<typeof schema>>;
}

export class CsvParser implements ICsvParser {
	parse<T extends ZodRawShape>(
		csv: string,
		schema: z.ZodObject<T>,
	): Array<z.infer<typeof schema>> {
		const records: unknown = parse(csv, {
			columns: true,
			groupColumnsByName: true,
		});
		const parsed = z.array(schema).parse(records);
		return parsed;
	}
}
