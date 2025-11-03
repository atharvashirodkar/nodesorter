import fs from "fs";
import fsp from "fs/promises";
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let basePath = path.join(__dirname, 'public');
let files = await fsp.readdir(basePath);

for (let item of files) {
  let ext = item.split(".")[item.split(".").length - 1];

  // To Skip JS, JSON, and folder names
  if (ext === "js" || ext === "json" || item.split(".").length <= 1) continue;

  // Create folder if it doesn’t exist
  if (!fs.existsSync(path.join(basePath, ext))) {
    fs.mkdirSync(path.join(basePath, ext));
  }

  // Move the file to the correct folder
  fs.renameSync(
    path.join(basePath, item),
    path.join(basePath, ext, item)
  );
}

console.log("✅ Files organized successfully!");
