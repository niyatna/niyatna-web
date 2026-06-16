import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content/docs');
const outputDir = path.join(process.cwd(), 'public');

function getMdxFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getMdxFiles(filePath, files);
    } else if (file.endsWith('.mdx')) {
      files.push(filePath);
    }
  }
  return files;
}

function buildIndex() {
  const files = getMdxFiles(contentDir);
  const searchIndex = [];
  const llmsIndex = {};

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Parse simple frontmatter (supporting both single/double quotes and unquoted strings)
    const titleMatch = content.match(/title:\s*["']?(.*?)["']?\r?\n/);
    const descMatch = content.match(/description:\s*["']?(.*?)["']?\r?\n/);
    
    let title = titleMatch ? titleMatch[1].trim() : path.basename(file, '.mdx');
    let description = descMatch ? descMatch[1].trim() : '';

    // Strip wrapping quotes if present
    if (title.startsWith('"') && title.endsWith('"')) title = title.slice(1, -1);
    if (title.startsWith("'") && title.endsWith("'")) title = title.slice(1, -1);
    if (description.startsWith('"') && description.endsWith('"')) description = description.slice(1, -1);
    if (description.startsWith("'") && description.endsWith("'")) description = description.slice(1, -1);
    
    // Generate URL from path
    let relativePath = path.relative(contentDir, file)
      .replace(/\\/g, '/')
      .replace(/\.mdx$/, '');
      
    if (relativePath === 'index') {
      relativePath = '';
    } else if (relativePath.endsWith('/index')) {
      relativePath = relativePath.slice(0, -6);
    }
    
    const url = `/docs/${relativePath}`;

    // Strip frontmatter from content to get the clean markdown body
    let body = content;
    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (frontmatterMatch) {
      body = content.slice(frontmatterMatch[0].length).trim();
    }

    const llmText = `# ${title} (${url})\n\n${body}`;

    searchIndex.push({
      id: url,
      title,
      content: description,
      url,
    });

    llmsIndex[url] = llmText;
  }

  fs.writeFileSync(path.join(outputDir, 'search-index.json'), JSON.stringify(searchIndex, null, 2));
  fs.writeFileSync(path.join(outputDir, 'llms-index.json'), JSON.stringify(llmsIndex, null, 2));
  console.log('Search and LLMs indexes built successfully.');
}

buildIndex();
