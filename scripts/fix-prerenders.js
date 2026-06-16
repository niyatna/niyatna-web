import fs from "node:fs";
import path from "node:path";

const functionsDir = path.join(process.cwd(), ".vercel/output/functions");

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith(".prerender-config.json")) {
      try {
        const content = fs.readFileSync(filePath, "utf8");
        const json = JSON.parse(content);
        if (json.fallback) {
          console.log(`Fixing fallback in ${path.relative(process.cwd(), filePath)}`);
          json.fallback = null;
          fs.writeFileSync(filePath, JSON.stringify(json, null, 2), "utf8");
        }
      } catch (err) {
        console.error(`Failed to process ${filePath}:`, err);
      }
    }
  }
}

console.log("Fixing prerender config fallbacks...");
walkDir(functionsDir);
console.log("Done fixing prerenders!");
