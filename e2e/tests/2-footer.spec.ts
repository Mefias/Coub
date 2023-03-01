import { test, expect, Page } from '@playwright/test';

test.describe('Footer', () => {
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
  test("[701]	Ожидается наличие кнопки-логотипа Coub", async () => {

    await expect(page.locator('#root > div > footer > div > a.Footer_logo__B0aK8 > span > svg > use')).toBeVisible();
    page.locator('#root > div > footer > div > a.Footer_logo__B0aK8 > span > svg > use').click();
    await expect(page).toHaveURL('https://coub.com/');

  })
  test("[630]	Ожидается переход на страницу coub при нажатии на кнопку Go to coub.com", async () => {
    await expect(page.locator('#root > div > footer > div > a.Footer_linkToCoub__DdbFB > button')).toBeVisible();
    page.locator('#root > div > footer > div > a.Footer_linkToCoub__DdbFB > button').click();
    await expect(page).toHaveURL('https://coub.com/');

  })
  test("[702]	Ожидается наличие кнопки facebook", async () => {

    await expect(page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(1) > svg')).toBeVisible();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(1) > svg').click()

    ]);
    await expect(page1).toHaveURL('https://staging.coub.com/marketplace?#/https://www.facebook.com/thecoub/');
    await page1.close();



  })
  test("[703]	Ожидается наличие кнопки twitter", async () => {

    await expect(page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(2) > svg')).toBeVisible();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(2) > svg').click()

    ]);
    await expect(page1).toHaveURL('https://staging.coub.com/marketplace?#/https://twitter.com/coub');
    await page1.close();
  })
  test("[704]	Ожидается наличие кнопки discord", async () => {

    await expect(page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(3) > svg')).toBeVisible();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(3) > svg').click()

    ]);
    await expect(page1).toHaveURL('https://staging.coub.com/marketplace?#/https://discord.gg/coub');
    await page1.close();
  })
  test("[705]	Ожидается наличие кнопки telegram", async () => {
    await expect(page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(4) > svg')).toBeVisible();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_soc__FCqDw > div.Footer_social__E33up > a:nth-child(4) > svg').click()

    ]);
    await expect(page1).toHaveURL('https://staging.coub.com/marketplace?#/https://t.me/coubcommunity');
    await page1.close();
  })
  test("[706]	Ожидается наличие кнопки Litepapper", async () => {
    await expect(page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(1)')).toBeVisible();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(1)').click()

    ]);
    await expect(page1).toHaveURL('https://coub.com/litepaper/');
    await page1.close();
  })
  test("[707]	Ожидается наличие кнопки Blog", async () => {
    await expect(page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(2)')).toBeVisible();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(2)').click()

    ]);
    await expect(page1).toHaveURL('https://medium.com/@coub');
    await page1.close();
  })
  test("[708]	Ожидается наличие кнопки Apps", async () => {
    await expect(page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(3)')).toBeVisible();
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(3)').click()

    ]);
    await expect(page1).toHaveURL('https://coub.com/apps');
    await page1.close();
  })
  test("[709]	Ожидается наличие кнопки Brand", async () => {
    await expect(page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(4)')).toBeVisible();
    await page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(2) > div.Footer_links__aXupM > a:nth-child(4)').click();
    await expect(page).toHaveURL('https://staging.coub.com/marketplace?#/brand');
  })
  test("[710]	Ожидается наличие кнопки Terms", async () => {

    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)').click()

    ]);
    await expect(page1).toHaveURL('https://files.coub.com/legal/coub-tos.pdf');
    await page1.close();

  })
  test("[711]	Ожидается наличие кнопки Privacy", async () => {

    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(3) > div:nth-child(1) > a:nth-child(2)').click()

    ]);
    await expect(page1).toHaveURL('https://files.coub.com/legal/coub-privacy-policy.pdf');
    await page1.close();
  })
  test("[712]	Ожидается наличие кнопки DMCA", async () => {

    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(3) > div:nth-child(2) > a:nth-child(1)').click()

    ]);
    await expect(page1).toHaveURL('https://files.coub.com/legal/coub-dmca.pdf');
    await page1.close();
  })
  test("[713]	Ожидается наличие кнопки Help", async () => {
    
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#root > div > footer > div > div.Footer_footMenu__eBHet > div:nth-child(3) > div:nth-child(2) > a:nth-child(2)').click()

    ]);
    await expect(page1).toHaveURL('https://coub.com/help/faq');
    await page1.close();
  })
})