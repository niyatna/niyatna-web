import * as icons from '@hugeicons/core-free-icons';

const keys = Object.keys(icons);
const targets = ['chatgpt', 'claude', 'perplexity', 'ai', 'sparkles', 'brain'];

for (const t of targets) {
  const matches = keys.filter(k => k.toLowerCase().includes(t.toLowerCase()));
  console.log(`${t} matches:`, matches);
}
