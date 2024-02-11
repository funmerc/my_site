import fs from "fs";

export const readAndParseJSONFile = (filePath: string) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (_err) {
    console.error(`Failed to read JSON file at path: ${filePath}`);
    return {};
  }
};
