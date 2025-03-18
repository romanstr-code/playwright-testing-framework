// @ts-check
const { defineConfig, devices } = require('@playwright/test');

// Read environment variables
const CI = !!process.env.CI;
const ENV = process.env.TEST_ENV || 'dev';

// Environment-specific configurations
const envConfig = {
  dev: {
    baseURL: 'https://the-internet.herokuapp.com',
  },
  staging: {
    baseURL: 'https://the-internet-staging.herokuapp.com', // Example URL
  },
  prod: {
    baseURL: 'https://the-internet-prod.herokuapp.com', // Example URL
  }
};

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  // Maximum time one test can run for
  timeout: 30 * 1000,
  expect: {
    // Maximum time expect() should wait for the condition to be met
    timeout: 5000
  },
  // Run tests in files in parallel
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: CI,
  // Retry on CI only
  retries: CI ? 2 : 0, 
  // Opt out of parallel tests on CI
  workers: CI ? 1 : undefined,
  // Reporter to use
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['list']
  ],
  // Shared settings for all the projects below
  use: {
    // Base URL from environment config
    baseURL: envConfig[ENV].baseURL,
    
    // Collect trace when retrying the failed test
    trace: CI ? 'on' : 'on-first-retry',
    // Take screenshot on failure
    screenshot: 'only-on-failure',
    // Record video on failure
    video: CI ? 'on-first-retry' : 'off',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});