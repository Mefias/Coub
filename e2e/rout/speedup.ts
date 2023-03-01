import { Page } from '@playwright/test';

export class RouteSpeedup {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async speedup (){
    await this.page.route('**/widgets.js', route => {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: ''
        });
      });
  }
}