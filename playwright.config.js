// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testMatch: 'login.spec.js',
  use: {
    trace: 'on-first-retry',
    headless: false,
    viewport: {width:1280, height:720},
    video: 'on'
  },
  timeout: 60000,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
      // {
      //   name: 'firefox',
      //   use: { ...devices['Desktop Firefox'] },
      // },
      // {
      //   name: 'webkit',
      //   use: { ...devices['Desktop Safari'] },
      // },
  ],
};

module.exports = config;
