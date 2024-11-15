const {test,expect}=require('@playwright/test')

test("alert handling",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
    
    page.on('dialog',async(d)=>{
       expect(d.type()).toContain("alert");
        await page.waitForTimeout(1000)
        await d.accept() 
    })
    await page.locator("#buttonAlert2").click()
    await page.waitForTimeout(1000)
})
test('test', async ({ browser }) => {
    const context=await browser.newContext()
    const page=await context.newPage()
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     await expect(page.getByPlaceholder('Username')).toBeVisible();
     await page.getByPlaceholder('Password').click();
     await page.getByPlaceholder('Password').fill('bbbh');
     await page.getByRole('button', { name: 'Login' }).click();
     await expect(page.locator('span')).toContainText('Required');
     const pp=context.waitForEvent('page')
     await page.locator("//a[.='OrangeHRM, Inc']").click();
     const np=await pp
     np.close()
   
     await page.pause(3000)
   });