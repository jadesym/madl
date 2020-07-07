import { readJSONFile, writeJSONFile } from '../../src/schema/jsonfile';
import { TEST_TMP_DIR } from '../util';
import { mkdirSync, rmdirSync, unlinkSync } from 'fs';

test('Generate JSON File', async () => {
  const generatedJSONFileName = `${TEST_TMP_DIR}/written-json-file.json`;

  await unlinkSync(generatedJSONFileName);
  await writeJSONFile(generatedJSONFileName, {
    a: 1,
    b: 2,
  });
  const fileJSONObject = await readJSONFile(generatedJSONFileName);

  expect(fileJSONObject).toHaveProperty('a', 1);
  expect(fileJSONObject).toHaveProperty('b', 2);
});

test('Read JSON File Errors', async () => {
  const nonExistentJSONFile = `${TEST_TMP_DIR}/non-existent-json-file`;

  expect.assertions(2);

  try {
    await readJSONFile(nonExistentJSONFile);
  } catch (err) {
    expect(err).not.toBeNull();
    expect(err).not.toBeUndefined();
  }
});

test('Write JSON File Errors', async () => {
  const directoryFileName = `${TEST_TMP_DIR}/non-json-file-directory`;

  await rmdirSync(directoryFileName);
  await mkdirSync(directoryFileName);

  expect.assertions(2);

  try {
    await writeJSONFile(directoryFileName, {
      a: 1,
      b: 2,
    });
  } catch (err) {
    expect(err).not.toBeNull();
    expect(err).not.toBeUndefined();
  }
});
