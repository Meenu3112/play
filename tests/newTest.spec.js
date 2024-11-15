import { test, expect } from '@playwright/test';

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