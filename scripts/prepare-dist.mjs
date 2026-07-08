import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

await rm(join(rootDir, "dist"), { recursive: true, force: true });
await mkdir(join(rootDir, "dist"), { recursive: true });

for (const file of ["index.html", "styles.css", "app.js"]) {
  await cp(join(rootDir, file), join(rootDir, "dist", file));
}

console.log("Prepared dist for Vercel.");
