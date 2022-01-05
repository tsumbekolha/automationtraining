// example.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../src/login');
const { ProjectsPage } = require('../src/projects');

test.describe('login feature', () => {
  test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  });

  test.only('should login user successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const projectsPage = new ProjectsPage(page);
    await loginPage.login();  //this line represents lines below
    // await page.fill('input[placeholder="user@company.com"]', 'automation@lokalise.com');
    // await page.fill('input[type="password"]', 'Test123');
    // await page.click('button:has-text("Log in")');
    await projectsPage.shouldBeLoggedin(); //this line represents lines below
    // await expect(page.locator('img[alt="Team logo"]')).toBeVisible();
    // await expect(page.locator('[data-name="project-sidebar"]')).toBeVisible();
    // await expect(page).toHaveURL('https://stage.lokalise.com/projects');
  });

  //TASK#2

  test('should show error when logging-in with invalid credentials', async ({ page }) => {
    await page.fill('input[placeholder="user@company.com"]', 'automation@lokalise.com');
    await page.fill('input[type="password"]', 'Test1234');
    await page.click('button:has-text("Log in")');
    await expect(page.locator('text=Wrong email address and/or password')).toBeVisible();
    await expect(page.locator('img[alt="Team logo"]')).not.toBeVisible();
  });

  test('should alow user to reset the password', async ({ page }) => {
    await page.click('button:has-text("Forgot password?")');
    await expect(page.locator('label:has-text("Your e-mail")')).toBeVisible();
    await expect(page.locator('button:has-text("Send me the reset link")')).toBeVisible();
  });

});