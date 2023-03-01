import { test, expect, Page } from '@playwright/test';

test.describe('Header', () => {
  let page: Page;
  test.beforeAll(async ({ browser }, testInfo) => {
    //console.log(`Running ${testInfo.title}`);
    const context = await browser.newContext({
      storageState: "./auth.json"
    })
    page = await context.newPage();

     //const ctxt = page.context();
     //ctxt.storageState()
    await page.goto('https://staging.coub.com/marketplace?#/');
    //await page.waitForTimeout(3000);
  });
  test('[700] Ожидается наличие кнопки-логотипа NFTCoub', async () => {

    await expect(page.locator('#root > div > header > div > a > svg')).toBeVisible();
    await page.locator('#root > div > header > div > a > svg').click();


  })
  test('[693] Ожидается наличие кнопки NFTCoub', async () => {
    await expect(page.locator('#root > div > header > div > nav > a.Header_active__H8BOQ')).toHaveText('NFTCoub');
    await page.locator('#root > div > header > div > nav > a.Header_active__H8BOQ').click();
    await expect(page).toHaveURL('https://staging.coub.com/marketplace?#/');

  })
  test('[694] Ожидается наличие кнопки Explore', async () => {
    await expect(page.locator('#root > div > header > div > nav > a:nth-child(2)')).toHaveText('Explore');
    await page.locator('#root > div > header > div > nav > a:nth-child(2)').click();
    await expect(page).toHaveURL('https://staging.coub.com/marketplace?#/explore/items');

  })
  test('[695] Ожидается наличие кнопки Litepaper', async () => {
    await expect(page.locator('#root > div > header > div > nav > a:nth-child(3)')).toHaveText('Litepaper');
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > header > div > nav > a:nth-child(3)').click()

    ]);
    await page1.close();

  })
  test('[696] Ожидается наличие поисковой строки', async () => {
    await expect(page.locator('#root > div > header > div > div.Header_header__search__25zEW > div > input')).toBeVisible();
    await page.locator('#root > div > header > div > div.Header_header__search__25zEW > div > input').click();
    await page.locator('#root > div > header > div > div.Header_header__search__25zEW > div > input').fill('123');

  })
  test('[697] Ожидается наличие кнопки Create', async () => {
    await expect(page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_gradient__sOJ0M.Header_btn__kWHNZ')).toHaveText('Create');
    await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_gradient__sOJ0M.Header_btn__kWHNZ').click();
    await expect(page).toHaveURL('https://staging.coub.com/marketplace?#/trade/choose/');

  })
  test('[698] Ожидается наличие кнопки оповещения', async () => {
    await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_dark__YULBo.Header_headNotify___8mvo > svg').click();
    await expect(page).toHaveURL('https://staging.coub.com/marketplace?#/notifications');

  })
  test('[699] Ожидается наличие кнопки профиля', async () => {
    await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button').click();
    await expect(page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button > img')).toBeVisible();

  })
  test('[519] Ожидается отображение баланса в COUB и аватара пользователя в хэдере', async () => {
    await page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button').click();
    await expect(page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div.authorization_userAuthContainer__byL3y > button > img')).toBeVisible();
    await expect(page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div.headerProfileInfo_userProfileContainer__m8uHU > div > div:nth-child(2) > div.headerProfileInfo_coubQuantityContainer__NWRqk > span:nth-child(1)')).toBeVisible();

  })

})