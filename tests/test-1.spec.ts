import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://bsc.coub.me/#/
  await page.goto('https://bsc.coub.me/#/');

  // Click video >> nth=1
  await page.locator('video').nth(1).click({
    button: 'right'
  });

  // Go to https://bsc.coub.me/#/
  await page.goto('https://bsc.coub.me/#/');

  // Click nav >> text=Explore
  await page.locator('nav >> text=Explore').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/explore/items');

  // Click nav >> text=Litepaper
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('nav >> text=Litepaper').click()
  ]);

  // Click [placeholder="Search\.\.\."]
  await page.locator('[placeholder="Search\\.\\.\\."]').click();

  // Fill [placeholder="Search\.\.\."]
  await page.locator('[placeholder="Search\\.\\.\\."]').fill('123');

  // Press Enter
  await page.locator('[placeholder="Search\\.\\.\\."]').press('Enter');

  // Click text=All results
  await page.locator('text=All results').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/explore/items?search=123');

  // Click text=Create
  await page.locator('text=Create').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/trade/choose/');

  // Click text=Create0.4084 BNB >> img >> nth=0
  await page.locator('text=Create0.4084 BNB >> img').first().click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/notifications');

  // Click button:has-text("0.4084 BNB")
  await page.locator('button:has-text("0.4084 BNB")').click();

  // Click text=1999999999.9
  await page.locator('text=1999999999.9').click();

  // Click span:has-text("COUB") >> nth=0
  await page.locator('span:has-text("COUB")').first().click();

  // Click text=vCOUB
  await page.locator('text=vCOUB').click();

  // Click text=BNB >> nth=1
  await page.locator('text=BNB').nth(1).click();

  // Click a:has-text("kirill.nosov")
  await page.locator('a:has-text("kirill.nosov")').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/authors/0xed5f94000882836d7c996effed6a6a7a84d02a62');

  // Click button:has-text("0.4084 BNB")
  await page.locator('button:has-text("0.4084 BNB")').click();

  // Click text=Earnings
  await page.locator('text=Earnings').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/earnings');

});