import { Page } from '@playwright/test';

export class RouteTorus {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async mock (){
    await this.page.route('**/api/v2/users/torus_wallet_address_token', route => {
        route.fulfill({
          contentType: 'application/json',
          body: '{"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjgzNDJkMTRkNjdiNWQ4MWYyNTljM2Y1MDhlN2E5YzhkYWM3MjE5ZTUifQ.eyJleHAiOjE2NjgxNjQ4NTUsImlzcyI6ImNvdWIiLCJhdWQiOiJwZXJzb25hbGl6ZSIsInVzZXJfaWQiOiIyODMiLCJzdWIiOiIweDA4NDFjMjM0OTc4NDZiNDgxM2U3ODcyMTgwOTM5MWJEODFDQjI5ZDQiLCJzY29wZSI6IncyZSJ9.dzFXCUVLQJS_5ejPdGfS5rAwyEBmbW7V7z5NTnhwRwJLV67vZdId5anqd3kVggGQs5cD6ac2gRSsjn0gZU6kq0vNO7WlMsA9R8JwuPN5pDBBN0fWR0sySCmJtk146PXT2tXjoB__s5o-mvlB1F5soATNdstwPmMrRHYxPp302SgSM56CbeuwXpZdPB-o2js0smWEP2q_bPrgo5HVbMK7aY4xb6j8zy8wmbMnQB0laJiSGznNf0jFcMsNdOp5AMpqJgATziQRbSmIYaTTdKC3vBBRHHGvlGnFtM29hM5ryTbzzutkQ14wu-QxwoadblcNFNXL9AClG0t_iXebU5kttw","expires_in":86400,"token_type":"Bearer"}'
        });
      });
  }
}