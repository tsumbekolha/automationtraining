// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.ProjectsPage = class ProjectsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sidebar = page.locator('[data-name="project-sidebar"]');
    this.teamLogo = page.locator('img[alt="Team logo"]');
  }

  async open() {
    await this.page.goto('https://stage.lokalise.com/projects');
  }

  async shouldBeLoggedin() {
    await expect(this.teamLogo).toBeVisible();
    await expect(this.sidebar).toBeVisible();
    await expect(this.page).toHaveURL('https://stage.lokalise.com/projects');
  }

}