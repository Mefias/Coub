import { test, expect } from '@playwright/test';

test('Positive authorization VK', async ({ page }) => {


  
  await page.goto('https://coub.com/');

  
  await page.locator('.music-announce-popup > button').click();

  
  await page.locator('div.coub:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > i:nth-child(1) > svg:nth-child(1)').click();
  await page.waitForURL('https://coub.com/auth');

  
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('button').nth(2).click()
  ]);

  
  await page2.locator('input[name="email"]').click();

  await page2.locator('input[name="email"]').fill('79680880849');

  await page2.locator('input[name="pass"]').click();

  await page2.locator('input[name="pass"]').fill('ToWyC6fvcfSBeYJv');

  await page2.locator('#install_allow').click();

  await page2.close();

  await page.locator('li.main-menu__nav-item:nth-child(9) > a:nth-child(1)').click();

  await page.waitForURL('https://coub.com/bookmarks');

  await page.locator('div.img:nth-child(2) > svg:nth-child(1) > path:nth-child(1)').click();

  await page.waitForURL('https://coub.com');

});

test('Negative authorization VK', async ({ page }) => {


  
  await page.goto('https://coub.com/');

  
  await page.locator('.music-announce-popup > button').click();

  
  await page.locator('div.coub:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > i:nth-child(1) > svg:nth-child(1)').click();
  await page.waitForURL('https://coub.com/auth');

  
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('button').nth(2).click()
  ]);

  
  await page2.locator('input[name="email"]').click();

  await page2.locator('input[name="email"]').fill('11111111111');

  await page2.locator('input[name="pass"]').click();

  await page2.locator('input[name="pass"]').fill('1111111111');

  await page2.locator('#install_allow').click();
  
  await page2.locator('//*[@id="login_submit"]/div/div/div[3]').click();

  //тут надо придумать как сделать условие ,что ожидание может быть 2 в этом случае (либо ошибка либо запрос капчи)

 await page2.close();

await page.waitForURL('https://coub.com/auth');
});

test('Authorization mail with an empty input', async ({ page }) => {


  
    await page.goto('https://coub.com/');
  
    
    await page.locator('.music-announce-popup > button').click();
  
    
    await page.locator('div.coub:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > i:nth-child(1) > svg:nth-child(1)').click();
    await page.waitForURL('https://coub.com/auth');
  
    
   
  await page.locator('.BEbfn').click();
  
  await page.locator('.sc-hKMtZM').click();
  
  });

test('Authorization Request Check', async ({ page }) => {
    
    
  await page.goto('https://coub.com/');
    
  await page.locator('.music-announce-popup > button').click();

  await page.locator('div.page-menu__item:nth-child(2)').click();

  await expect(page).toHaveURL('https://coub.com/rising');

  await page.locator('.stories-block__heading').click();

  await page.locator('div.page-menu__item:nth-child(3)').click();

  await expect(page).toHaveURL('https://coub.com/fresh');

  await page.locator('.more-stories-button').click();

  await page.locator('.channels-block__heading > h3:nth-child(1)').click();
    
  await page.locator('div.img:nth-child(2) > svg:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com');

  await page.locator('li.active:nth-child(2) > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/hot');

  await page.locator('.stories-block__heading').click();

  await page.locator('.main-menu__nav > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/random');

  await page.locator('.main-menu__nav > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)').click();

  await page.locator('div.page-menu__item:nth-child(2)').click();
  
  await page.locator('.channels-block__heading > h3:nth-child(1)').click();

  await page.locator('div.page-menu__item:nth-child(2)').click();

  await expect(page).toHaveURL('https://coub.com/featured/stories/likes');

  await page.locator('li.main-menu__nav-item:nth-child(6) > div:nth-child(1)').click();

  await page.locator('.highlighted > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/weekly/2022/35');

  await page.locator('div.page-menu__item:nth-child(1) > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/weekly/2022/34');

  await page.locator('div.page-menu__item:nth-child(3) > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/weekly/2022/35');

  await page.locator('li.main-menu__nav-item:nth-child(7) > div:nth-child(1)').click();

  await page.locator('.main-menu__nav-hidden > li:nth-child(1) > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/royal.coubs');

  await page.locator('div.page-menu__item:nth-child(2)').click();

  await expect(page).toHaveURL('https://coub.com/royal.coubs/coubs');

  await page.locator('div.page-menu__item:nth-child(3)').click();

  await expect(page).toHaveURL('https://coub.com/royal.coubs/reposts');

  await page.locator('div.page-menu__item:nth-child(4)').click();

  await expect(page).toHaveURL('https://coub.com/royal.coubs/stories');

  await page.locator('.-sq > span:nth-child(1)').click();
  
 await page.locator('.likes_count > a:nth-child(1)').click();
  
  await page.locator('.-sq > span:nth-child(1)').click();
  //тут что то не так не жмутся селекторы
  
  await page.locator('li.list__item:nth-child(3) > a:nth-child(1)').click();

 await page.locator('.-sq > span:nth-child(1)').click();
  
  await page.locator('li.list__item:nth-child(4) > a:nth-child(1)').click();
  
  await page.locator('.-sq > span:nth-child(1)').click();
  
 await page.locator('li.list__item:nth-child(5) > a:nth-child(1)').click();
  
 await page.locator('.channels-block__heading > h3:nth-child(1)').click();

  await page.locator('li.main-menu__nav-item:nth-child(7) > div:nth-child(1)').click();
  
  await page.locator('.main-menu__nav-hidden > li:nth-child(2) > a:nth-child(1)').click();

 await expect(page).toHaveURL('https://coub.com/best/2021');
  
  await page.locator('div.img:nth-child(2) > svg:nth-child(1)').click();

  //await page.locator('.main-menu__nav-hidden > li:nth-child(2) > a:nth-child(1)').click();

  //await page.locator('div.page-menu__item:nth-child(2) > a:nth-child(1)').click();


  //await expect(page).toHaveURL('https://coub.com/best/2021/memes');
  
  //await page.locator('div.page-menu__item:nth-child(3) > a:nth-child(1)').click();

  //await expect(page).toHaveURL('https://coub.com/best/2021/hidden-gems');
  
  await page.locator('a.sb:nth-child(2)').click();

  await expect(page).toHaveURL('https://coub.com/auth');
  
  await page.locator('.sc-fEOsli > a:nth-child(1) > img:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/');
  
  await page.locator('li.main-menu__nav-item:nth-child(6) > div:nth-child(1)').click();
  
  await page.locator('.main-menu__nav-hidden > li:nth-child(4) > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/friends/who-to-follow');
  
  await page.locator('.text').click();
  
  await page.locator('li.main-menu__nav-item:nth-child(7) > div:nth-child(1)').click();
  
  await page.locator('.main-menu__nav-hidden > li:nth-child(4) > a:nth-child(1)').click();

  await expect(page).toHaveURL('https://coub.com/featured/channels');
  
  await page.locator('div.dot:nth-child(2)').click();
  
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('div.slideshow__item:nth-child(1) > a:nth-child(2)').click()
  ]);
  
  await page1.locator('li.main-menu__nav-item:nth-child(9) > a:nth-child(1)').click();
  
  await page1.locator('.text').click();
  
  await page1.locator('li.main-menu__nav-item:nth-child(9) > a:nth-child(1)').click();

  await expect(page1).toHaveURL('https://coub.com/bookmarks');
  
  await page1.locator('.text').click();
  
  await page1.locator('.-off').click();

  await expect(page1).toHaveURL('https://coub.com/bookmarks');
  
  await page1.locator('div.switcher:nth-child(3)').click();

  await expect(page1).toHaveURL('https://coub.com/bookmarks');
  
  await page1.locator('div.dropdown:nth-child(1) > div:nth-child(1) > span:nth-child(1)').click();
  
  await page1.locator('.nav__item__inner').click();

  await expect(page1).toHaveURL('https://coub.com/create');
  
  await page1.locator('div.cb-edtr__upload-type:nth-child(2)').click();
  
  await page1.locator('.BEbfn').click();

  await expect(page1).toHaveURL('https://coub.com/auth');
});
