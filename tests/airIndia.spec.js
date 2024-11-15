const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.airindia.com/');
  await page.locator('.onetrust-pc-dark-filter').click();
  // await expect(page.locator('.onetrust-pc-dark-filter')).toBeVisible();

  // ---------------------
  await context.close();
  await browser.close();
})();