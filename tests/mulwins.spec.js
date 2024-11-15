const { test, expect } = require("@playwright/test");

test("switching between multiple windows", async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    // Click the link to open a new page
    const pagePromise = context.waitForEvent('page');
     await page1.locator("//a[.='OrangeHRM, Inc']").click();
    const newPage = await pagePromise;
 
    await page1.waitForTimeout(2000)
   
    // Wait for the new page to open
    
    await newPage.close();

    // Optional delay for observation (not required in tests generally)
    await page1.waitForTimeout(2000);
});