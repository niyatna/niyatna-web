import { chromium } from 'playwright';

const routes = ['/', '/about', '/services', '/work', '/contact', '/docs', '/privacy', '/security', '/terms'];
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
page.setDefaultNavigationTimeout(60000);
const errors = [];
page.on('pageerror', (err) => errors.push(`Page Error: ${err.message}`));
page.on('console', (msg) => {
  if (msg.type() === 'error') {
    if (msg.text().includes('Failed to load resource')) return;
    if (msg.text().includes('_vercel/insights')) return;
    errors.push(`Console Error: ${msg.text()}`);
  }
});
page.on('requestfailed', (req) => {
  if (req.failure()?.errorText === 'net::ERR_ABORTED') return;
  if (req.url().includes('_vercel/insights')) return;
  errors.push(`Request Failed: ${req.url()} (${req.failure()?.errorText || 'failed'})`);
});
page.on('response', (res) => {
  if (res.status() >= 400) {
    if (res.url().includes('_vercel/insights')) return;
    errors.push(`Response HTTP ${res.status()}: ${res.url()}`);
  }
});
for (const route of routes) {
  const response = await page.goto(`http://localhost:4175${route}`, { waitUntil: 'load' });
  if (!response || response.status() >= 400) throw new Error(`${route} -> ${response?.status()}`);
  const text = await page.locator('body').innerText();
  if (!text.includes('Niyatna')) throw new Error(`${route} missing Niyatna copy`);
}
await page.goto('http://localhost:4175/', { waitUntil: 'load' });
const hasIntentScroll = await page.locator('#intent-scroll').count();
if (!hasIntentScroll) throw new Error('missing #intent-scroll');
const faqTrigger = page.locator('[data-slot="accordion-trigger"]').first();
if (await faqTrigger.count()) {
  await faqTrigger.click();
  await page.waitForTimeout(500);
}
await page.screenshot({ path: 'artifacts/next-full-niyatna-home.png', fullPage: true });
await browser.close();
if (errors.length) throw new Error(errors.join('\n'));
console.log('quick QA passed: routes + Niyatna copy + intent scroll + screenshot');
