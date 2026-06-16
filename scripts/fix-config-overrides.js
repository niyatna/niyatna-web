import fs from "node:fs";
import path from "node:path";

const staticDir = path.join(process.cwd(), ".vercel/output/static");
const configPath = path.join(process.cwd(), ".vercel/output/config.json");

if (!fs.existsSync(configPath)) {
  console.error("config.json not found!");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
if (!config.overrides) {
  config.overrides = {};
}

function findHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith(".html")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const htmlFiles = findHtmlFiles(staticDir);
console.log(`Found ${htmlFiles.length} HTML files in static output.`);

const excludeList = ["404.html", "500.html", "_global-error.html", "_not-found.html"];

for (const filePath of htmlFiles) {
  const relativePath = path.relative(staticDir, filePath);
  
  if (excludeList.includes(relativePath)) {
    continue;
  }
  
  // Calculate URL path
  // E.g., index.html -> "", about.html -> "about", docs/getting-started.html -> "docs/getting-started"
  let urlPath = relativePath.slice(0, -5); // strip ".html"
  if (urlPath === "index") {
    urlPath = "";
  } else if (urlPath.endsWith("/index")) {
    urlPath = urlPath.slice(0, -6);
  }
  
  console.log(`Adding override: ${relativePath} -> "${urlPath}"`);
  config.overrides[relativePath] = {
    path: urlPath,
    contentType: "text/html; charset=utf-8"
  };
}

fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf8");
console.log("config.json overrides updated successfully!");
