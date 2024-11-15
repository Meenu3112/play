import { test, expect } from '@playwright/test';

test('amazon', async ({ browser }) => {
    const context=await browser.newContext()
    const page1=await context.newPage()
  await page1.goto('https://www.amazon.in/');
  await page1.getByRole('link', { name: 'Electronics' }).click();
  await expect(page1.locator('#sobe_d_b_ms_7_1')).toContainText('Laptops');
  await expect(page1.getByRole('link', { name: 'Smartwatches Smartwatches' })).toBeVisible();
   await page1.goto('https://www.flipkart.com/');
    
});
test('multiple windows',async({browser})=>{
    const context= await browser.newContext()
        const page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
    const np=context.waitForEvent('page')
    await page.locator("#browserLink1").click()
    const newpage=await np
    newpage.close()
    await page.waitForTimeout(2000)
})
test("alert handling",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
    
    page.on('dialog',async(d)=>{
       expect(d.type()).toContain("alert");
       expect(d.message()).toContain("I am an alert box!")
        await page.waitForTimeout(1000)
        await d.accept() 
    })
    await page.locator("#buttonAlert2").click()
    await page.waitForTimeout(1000)
})
test.only("frame handling",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
    await page.locator("//section[.='Frames']").click()
    await page.locator("//section[.='iframes']").click()
    await page.locator("//a[.='Multiple iframe']").click()

    const frame= await page.frameLocator("(//iframe[@class='w-full h-96'])[2]")
    await frame.locator("//input[@id='username']").fill("fhfjfmf")
    await page.waitForTimeout(1000)
})