import { Page } from '@playwright/test';

export class RouteGraphQL {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async graphql (){
    await this.page.route('**/widgets.js', route => {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: ''
        });
      });
  }
}