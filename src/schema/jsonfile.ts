import { readFileSync, writeFileSync, Path } from 'jsonfile';

export const readJSONFile = async function (filename: Path): Promise<Record<string, unknown>> {
  return await readFileSync(filename);
};

export const writeJSONFile = async function (filename: Path, jsonObject: Record<string, unknown>): Promise<void> {
  return await writeFileSync(filename, jsonObject);
};
