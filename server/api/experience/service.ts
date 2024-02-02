import fs from "fs";
import path from "path";
import { readAndParseJSONFile } from "../../modules/fileReader";

const getWorkExperienceItems = async () => {
  const filePath = path.join(__dirname, "work_experience.json");
  return readAndParseJSONFile(filePath);
};

export default {
  getWorkExperienceItems,
};
