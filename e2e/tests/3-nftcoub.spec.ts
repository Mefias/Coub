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
test("[714] Ожидается наличие кнопки Explore Marketplace" ,async () => {
})
test("[485] Ожидается отображение секции Top coubers с выдачей пользователей, отсортированных по сумме проданных nft" ,async () => {
})
test("[504] Ожидается отображение аватара пользователя в секции Top coubers" ,async () => {
})
test("[505] Ожидается отображение количества проданных нфт и суммарная их стоимость в карточке автора секции Top coubers" ,async () => {
})
test("[486] Ожидается скролл позиций при нажатии стрелки в секции Top coubers" ,async () => {
})
test("[487] Ожидается переход на страницу автора при нажатии на его карточку в секции Top coubers" ,async () => {
})
test("[508] Ожидается отображение карточек нфт в секциях Hot bids/Recently added" ,async () => {
})
test("[488] Ожидается отображение секции Hot Bids с выдачей nft, отсортированных по последним действиям на аукционе" ,async () => {
})
test("[489] Ожидается скролл позиций при нажатии стрелки в секции Hot Bids" ,async () => {
})
test("[490] Ожидается переход на страницу nft при нажатии на его карточку в секции Hot Bids" ,async () => {
})
test("[491] Ожидается отображение секции Recently Added с выдачей nft, отсортированных по времени добавления" ,async () => {
})
test("[492] Ожидается скролл позиций при нажатии стрелки в секции Recently Added" ,async () => {
})
test("[493] Ожидается переход на страницу nft при нажатии на его карточку в секции Recently Added " ,async () => {
})
test("[506] Ожидается возможность репорта нфт при нажатии на кнопку Report в опциях карточки нфт секций Hot Bids/Recently added" ,async () => {
})
test("[507] Ожидается возможность лайка нфт при нажатии на кнопку Like (сердце) в карточке нфт секций Hot Bids/Recently added" ,async () => {
})
})