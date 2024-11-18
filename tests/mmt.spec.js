const {test,expect}=require("@playwright/test")
test("First demo test",async({page})=>{
    await page.goto("https://www.makemytrip.com/")
     await page.locator('section').filter({ hasText: 'Personal AccountMyBiz Account' }).locator('span').first().click();
  await page.getByText('Departure').click();
  await page.waitForSelector("(//div[@class='DayPicker-Month'])[1]/descendant::p[@class=' todayPrice']")
 let allprices=await page.$$("(//div[@class='DayPicker-Month'])[1]/descendant::p[@class=' todayPrice']")
let pricetxt=[]

  for(let price of allprices)
 {
   let pricetext=await price.textContent()
    await pricetxt.push(parseFloat(pricetext.replace(",","")))
    
 }
 console.log(pricetxt)
 let lowestprice=Math.min(...pricetxt)
 console.log(lowestprice)
 for(let i=0; i<pricetxt.length; i++)
 {
    let y = pricetxt[i]
     if( y==lowestprice)
          {
    await allprices[i].click()
    await page.waitForTimeout(3000)
    break;
    // added the code 
   }

 }
 
});