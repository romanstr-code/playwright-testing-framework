/**
 * Login functionality tests based on manual test cases TC001, TC002, TC003
 * This test file automates the login scenarios defined in login-functionality.md
 */
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../src/pages/login-page');
const TestHelper = require('../../src/helpers/test-helper');

// Define a test suite for login functionality
test.describe('Login Functionality Tests', () => {
  // Define a hook that runs before each test
  test.beforeEach(async ({ page }) => {
    TestHelper.logInfo('Starting login test');
  });

  // TC001: Valid Login
  test('TC001 - Should login successfully with valid credentials', async ({ page }) => {
    // Create a login page instance
    const loginPage = new LoginPage(page);
    
    // Navigate to the login page
    await loginPage.navigateToLoginPage();
    
    // Perform login with valid credentials
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    
    // Verify success message is displayed
    const message = await loginPage.getFlashMessage();
    expect(message).toContain('You logged into a secure area!');
    
    // Verify user is logged in
    expect(await loginPage.isLoggedIn()).toBeTruthy();
    
    TestHelper.logInfo('Valid login test completed successfully');
  });

  // TC002: Invalid Username Login
  test('TC002 - Should show error with invalid username', async ({ page }) => {
    // Create a login page instance
    const loginPage = new LoginPage(page);
    
    // Navigate to the login page
    await loginPage.navigateToLoginPage();
    
    // Generate a random invalid username
    const invalidUsername = TestHelper.generateRandomString();
    
    // Perform login with invalid username
    await loginPage.login(invalidUsername, 'SuperSecretPassword!');
    
    // Verify error message is displayed
    const message = await loginPage.getFlashMessage();
    expect(message).toContain('Your username is invalid!');
    
    // Verify user is not logged in
    expect(await loginPage.isLoggedIn()).toBeFalsy();
    
    TestHelper.logInfo('Invalid username test completed successfully');
  });

  // TC003: Invalid Password Login
  test('TC003 - Should show error with invalid password', async ({ page }) => {
    // Create a login page instance
    const loginPage = new LoginPage(page);
    
    // Navigate to the login page
    await loginPage.navigateToLoginPage();
    
    // Generate a random invalid password
    const invalidPassword = TestHelper.generateRandomString();
    
    // Perform login with invalid password
    await loginPage.login('tomsmith', invalidPassword);
    
    // Verify error message is displayed
    const message = await loginPage.getFlashMessage();
    expect(message).toContain('Your password is invalid!');
    
    // Verify user is not logged in
    expect(await loginPage.isLoggedIn()).toBeFalsy();
    
    TestHelper.logInfo('Invalid password test completed successfully');
  });
});