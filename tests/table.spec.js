const {test,expect}=require('@playwright/test');
test("Handling table",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table=await page.locator("#productTable")
    const cols=await table.locator('thead tr th')
   const colno= await cols.count()
   console.log("Number of Columns : ",  colno)
   const rows=await table.locator('tbody tr')
   const rowno=await rows.count()
   console.log("Number of Rows : " ,rowno)
   expect(colno).toBe(4)
   expect(rowno).toBe(5)
    await selectProduct(rows,page,'Laptop')
   await selectProduct(rows,page,'Smartwatch')
   await page.waitForTimeout(3000);
    })
    async function selectProduct(rows,page,name) {
        const matchedRow=rows.filter({
         has:page.locator('td'),
         hasText:name
        })
        await matchedRow.locator('input').check();
    }