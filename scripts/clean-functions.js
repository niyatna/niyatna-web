import fs from "node:fs";
import path from "node:path";

const functionsDir = path.join(process.cwd(), ".vercel/output/functions");

// List of folders we want to preserve (relative to .vercel/output/functions)
const whitelist = [
  "api/contact.func",
  "api/search.func",
  "llms.mdx/docs/[[...slug]].func",
  "og/docs/[[...slug]].func",
  "opengraph-image.func",
  "twitter-image.func",
  "opengraph-image.rsc.func",
  "twitter-image.rsc.func"
];

function shouldKeep(relativeFilePath) {
  // Check if the file/folder or any of its parent paths are in the whitelist
  return whitelist.some(item => {
    return relativeFilePath === item || relativeFilePath.startsWith(item + "/");
  });
}

function cleanFuncDirs(dir) {
  if (!fs.existsSync(dir)) return;
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const filePath = path.join(dir, file);
    const relativePath = path.relative(functionsDir, filePath);
    const stat = fs.lstatSync(filePath); // Use lstat to detect symlinks

    if (file.endsWith(".func")) {
      if (!shouldKeep(relativePath)) {
        console.log(`Deleting unused function: ${relativePath}`);
        fs.rmSync(filePath, { recursive: true, force: true });
      }
    } else if (stat.isDirectory()) {
      cleanFuncDirs(filePath);
      // Clean up empty directories
      if (fs.readdirSync(filePath).length === 0) {
        fs.rmdirSync(filePath);
      }
    }
  }
}

console.log("Cleaning up unused function directories...");
cleanFuncDirs(functionsDir);
console.log("Clean up completed successfully!");
