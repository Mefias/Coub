import { expect, Locator, Page } from '@playwright/test';

export class NftCoubPage {
  readonly page: Page;
  readonly nftCoubLogo: Locator;
  readonly nftCoubButton: Locator;
  readonly exploreButton: Locator;
  readonly litepaperButton: Locator;
  readonly search: Locator;
  readonly createButton: Locator;
  readonly notificationsButton: Locator;
  readonly profileButton: Locator;
  readonly profileCheck: Locator;
  readonly balance1: Locator;
  readonly balance2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nftCoubLogo = page.locator('#root > div > header > div > a > svg');
    this.nftCoubButton = page.locator('#root > div > header > div > nav > a.Header_active__H8BOQ');
    this.exploreButton = page.locator('#root > div > header > div > nav > a:nth-child(2)');
    this.litepaperButton = page.locator('#root > div > header > div > nav > a:nth-child(3)');
    this.search = page.locator('#root > div > header > div > div.Header_header__search__25zEW > div > input');
    this.createButton = page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_gradient__sOJ0M.Header_btn__kWHNZ');
    this.notificationsButton = page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > a.Button_button__zflwE.Button_medium__PciT4.Button_dark__YULBo.Header_headNotify___8mvo > svg');
    this.profileButton = page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button');
    this.profileCheck = page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div > button > img');
    this.balance1 = page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div.authorization_userAuthContainer__byL3y > button > img');
    this.balance2 = page.locator('#root > div > header > div > div.Header_headLinks__M86GJ > div.headerProfileInfo_userProfileContainer__m8uHU > div > div:nth-child(2) > div.headerProfileInfo_coubQuantityContainer__NWRqk > span:nth-child(1)');
  }
  async clickNftCoubLogo() {
    await expect(this.nftCoubLogo).toBeVisible();
    await this.nftCoubLogo.click();
  }

  async clickNftCoubButton() {
    await expect(this.nftCoubButton).toHaveText('NFTCoub');
    await this.nftCoubButton.click();
    await expect (this.page).toHaveURL('https://staging.coub.com/marketplace?#/');
  }

  async clickExploreButton() {
    await expect(this.exploreButton).toHaveText('Explore');
    await this.exploreButton.click();
    await expect (this.page).toHaveURL('https://staging.coub.com/marketplace?#/explore/items');
  }

  // async clickLitepaperButton() {
  //   await expect(this.exploreButton).toHaveText('Explore');
  //   await this.exploreButton.click();
  //   await expect (this.page).toHaveURL('https://staging.coub.com/marketplace?#/explore/items');
  // }

  async clickSearch() {
    await expect(this.search).toBeVisible();
    await this.search.click();
    await this.search.fill('123');
}

async clickCreateButton() {
  await expect(this.createButton).toHaveText('Create');
  await this.createButton.click();
  await expect (this.page).toHaveURL('https://staging.coub.com/marketplace?#/trade/choose');
}

async clickNotificationsButton() {
  await this.notificationsButton.click();
  await expect (this.page).toHaveURL('https://staging.coub.com/marketplace?#/notifications');
}

async clickProfileButton() {
  await this.profileButton.click();
  await expect(this.profileCheck).toBeVisible();
}

async clickBalance() {
  await this.profileButton.click();
  await expect(this.balance1).toBeVisible();
  await expect(this.balance2).toBeVisible();
}

async clickLitepaper() {
await expect(this.litepaperButton).toHaveText('Litepaper'); 
const [page1] = await Promise.all([
  this.page.waitForEvent('popup'),
  this.litepaperButton.click()
]);
await page1.close();
}


}