import fs from "node:fs";
import path from "node:path";

const functionsDir = path.join(process.cwd(), ".vercel/output/functions");
const staticDir = path.join(process.cwd(), ".vercel/output/static");

function copyFolderRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.endsWith(".func")) continue; // Skip functions completely

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    let isDir = entry.isDirectory();
    if (entry.isSymbolicLink()) {
      try {
        const realStat = fs.statSync(srcPath);
        isDir = realStat.isDirectory();
      } catch (err) {
        // Skip broken symlinks
        continue;
      }
    }

    if (isDir) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyPrerenderFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const list = fs.readdirSync(dir);

  for (const file of list) {
    const filePath = path.join(dir, file);
    const relativePath = path.relative(functionsDir, filePath);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      if (file.endsWith(".func")) {
        continue;
      }
      if (file.endsWith(".segments")) {
        const targetDir = path.join(staticDir, relativePath);
        console.log(`Copying segment directory: ${relativePath} -> ${relativePath}`);
        copyFolderRecursive(filePath, targetDir);
        continue;
      }
      copyPrerenderFiles(filePath);
    } else {
      let targetPath = null;

      if (file.endsWith(".rsc.prerender-fallback.rsc")) {
        const nameWithoutSuffix = relativePath.slice(0, -".rsc.prerender-fallback.rsc".length);
        targetPath = path.join(staticDir, nameWithoutSuffix + ".rsc");
      } else if (file.endsWith(".prerender-fallback.html")) {
        const nameWithoutSuffix = relativePath.slice(0, -".prerender-fallback.html".length);
        targetPath = path.join(staticDir, nameWithoutSuffix + ".html");
      } else if (file.endsWith(".prerender-fallback.body")) {
        const nameWithoutSuffix = relativePath.slice(0, -".prerender-fallback.body".length);
        targetPath = path.join(staticDir, nameWithoutSuffix);
      }

      if (targetPath) {
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        console.log(`Copying prerender asset: ${relativePath} -> ${path.relative(staticDir, targetPath)}`);
        fs.copyFileSync(filePath, targetPath);
      }
    }
  }
}

console.log("Copying prerendered assets to static directory...");
copyPrerenderFiles(functionsDir);
console.log("Copying prerendered assets completed successfully!");
