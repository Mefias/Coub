import { test, expect, Page } from '@playwright/test';
import { NftCoubPage } from '../pages/nftcoub.page';
//import { RouteCoub } from '../rout/coub';
import { RouteSpeedup } from '../rout/speedup';
import { mockGraphqlRequest } from '../rout/grapgqlreqest';

test.describe('Header', () => {
  let page: Page;
  let nftCoubPage 
  test.beforeAll(async ({ browser }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    const context = await browser.newContext({
      storageState: "./auth.json"
    })
    page = await context.newPage();

     //const ctxt = page.context();
     //ctxt.storageState()
    new RouteSpeedup(page).speedup()
    await mockGraphqlRequest(page)
    await page.goto('https://staging.coub.com/marketplace?#/');
    //await page.reload();
    nftCoubPage = new NftCoubPage(page)
    //await page.waitForTimeout(3000);
  });

  test('[700] Ожидается наличие кнопки-логотипа NFTCoub', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickNftCoubLogo()
  })

  test('[693] Ожидается наличие кнопки NFTCoub', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickNftCoubButton()
  })

  test('[694] Ожидается наличие кнопки Explore', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickExploreButton()
  })

  test('[695] Ожидается наличие кнопки Litepaper', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickLitepaper()
  })

  test('[696] Ожидается наличие поисковой строки', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickSearch()
  })

  test('[697] Ожидается наличие кнопки Create', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickCreateButton()
  })

  test('[698] Ожидается наличие кнопки оповещения', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickNotificationsButton()
  })

  test('[699] Ожидается наличие кнопки профиля', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickProfileButton()
  })
  
  test('[519] Ожидается отображение баланса в COUB и аватара пользователя в хэдере', async () => {
    let nftCoubPage = new NftCoubPage(page)
    await nftCoubPage.clickBalance()
  })

})