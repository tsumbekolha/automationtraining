const { test, expect } = require('@playwright/test');

test.describe('search feature', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://automationpractice.com/');
  });

  test('should be able to use search without entering any keyword', async ({ page }) => {
    // Press Search button
    await page.click("button:has-text('Search')")
    // User sees 'Please enter a search keyword' info message
    await expect(page.locator("'Please enter a search keyword'")).toBeVisible();
    // User don’t see any results
    await expect(page.locator("'0 results have been found.'")).toBeVisible();
    // Verify that user is able to enter a keyword in the search box
    await page.fill('input[placeholder="Search"]', 'this is test');
  });

  test('should be able to enter a keyword in the search box', async ({ page }) => {
    // Enter ’T-shirt’ into Search box
    await page.fill('input[placeholder="Search"]', 'T-shirt')
    // Click Search button
    await page.click("button:has-text('Search')")
    // User can see one result
    await expect(page.locator("'1 result has been found.'")).toBeVisible();
  });

  //Sign in button should lead to the login page and the user should see desired elements.
  test("should lead to the login page via Sign in button", async ({ page }) => {
    await page.goto("http://automationpractice.com/");
    await page.click('a.login');
    await expect(page.locator("#email")).toBeVisible();
    await expect(page.locator("#passwd")).toBeVisible();
    await expect(page.locator("#SubmitLogin")).toBeVisible();
    await expect(page.locator('label[for="email"]')).toBeVisible();
    await expect(page.locator('"Password"')).toBeVisible();
    await expect(page.locator('"Forgot your password?"')).toBeVisible();

  });
});