// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page test comment
   */
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://stage.lokalise.com/');
  }

  async login() {
    await this.page.fill('input[placeholder="user@company.com"]', 'automation@lokalise.com');
    await this.page.fill('input[type="password"]', 'Test123');
    await this.page.click('button:has-text("Log in")');
  }

}