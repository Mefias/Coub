import { test, expect } from '@playwright/test';

test('Header', async ({ browser }) => {

  const context = await browser.newContext({
    storageState: "./auth.json"
  })
  const page = await context.newPage();

  // const ctxt = page.context();
  // ctxt.storageState()

  // Go to https://bsc.coub.me/#/
  await page.goto('https://staging.coub.com/marketplace?#/');
  await page.waitForTimeout(5000);

  // Click CoubNFT logo
  await expect(page.locator('#root > div > header > div > a > svg > use')).toBeVisible();
  await page.locator('#root > div > header > div > a > svg > use').click();

  // Click Explore
  await expect(page.locator('#root > div > header > div > nav > a:nth-child(2)')).toHaveText('Explore');
  await page.locator('#root > div > header > div > nav > a:nth-child(2)').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/explore/items');

  // Click Litepaper
  await expect(page.locator('#root > div > header > div > nav > a:nth-child(3)')).toHaveText('Litepaper');
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#root > div > header > div > nav > a:nth-child(3)').click()
    
  ]);
  await page1.close();

  // Click NFTCoub
  await page.goto('https://bsc.coub.me/#/explore/items');
  await expect(page.locator('#root > div > header > div > nav > a:nth-child(1)')).toHaveText('NFTCoub');
  await page.locator('#root > div > header > div > nav > a:nth-child(1)').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/');

  // Click Search
  await expect(page.locator('#root > div > header > div > div.Header_header__search__25zEW > div > input')).toBeVisible();
  await page.locator('#root > div > header > div > div.Header_header__search__25zEW > div > input').click();
  await page.locator('#root > div > header > div > div.Header_header__search__25zEW > div > input').fill('123');

  // Click Create
  await expect(page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_gradient__sOJ0M.Header_btn__kWHNZ')).toHaveText('Create');
  await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_gradient__sOJ0M.Header_btn__kWHNZ').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/trade/choose/');

  // Click Notifications
  await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_dark__YULBo.Header_headNotify___8mvo > img').click();
  await expect(page).toHaveURL('https://bsc.coub.me/#/notifications');

  // Click Profile
  await page.locator('button:has-text("0.4084 BNB")').click();
  await expect(page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button > img')).toBeVisible();
  //Открывает поп-ап с профилем
  await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button > img').first().click();
  await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button > span').click();
  await expect(page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div.headerProfileInfo_userProfileContainer__m8uHU')).toBeVisible();

});