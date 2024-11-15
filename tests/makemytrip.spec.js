const {test,expect}=require('@playwright/test')
const { chromium } = require('@playwright/test');
test("makemytrip",async()=>{
    const browser = await chromium.launch({ headless: true });
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://www.makemytrip.com/")
    await page.maximizeWindow()
    await page.locator('//span[@class="commonModal__close"]').click()
    await page.locator("//label[@for='departure']").click()
    await page.waitForTimeout(2000)
    let price=await page.$$("(//div[@class='DayPicker-Month'])[1]/descendant::p[@class=' todayPrice']")
     let ptext=[]
    for(let p of price)
    {
        let text=await p.textContent();
        await ptext.push(text);
        }
    await ptext.sort();
    console.log(ptext[0])
    await page.click(`//p[.="${ptext[0]}"]`)
});
