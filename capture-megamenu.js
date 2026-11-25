const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/en/');
  
  // Wait for navigation to load
  await page.waitForLoadState('networkidle');
  
  // Hover over "Careers" menu item to open mega menu
  const careersMenu = await page.$('[data-menu="careers"]');
  if (careersMenu) {
    await page.hover('[data-menu="careers"]');
    await page.waitForTimeout(500);
  }
  
  // Take screenshot
  await page.screenshot({ path: 'megamenu.png' });
  await browser.close();
  process.exit(0);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
