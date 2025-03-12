/**
 * LoginPage class represents the login page of the application
 * It contains methods specific to login functionality
 */

const BasePage = require('./base-page');

class LoginPage extends BasePage {
    /**
   * Create a new LoginPage instance
   * @param {import('@playwright/test').Page} page - Playwright page instance
   */
  constructor(page){
    super(page); // Call the parent constructor

    // Define selectors for login page elements
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = 'button[type="submit"]';
    this.flashMessage = '#flash';
  }

  /**
   * Navigate to the login page
   * @returns {Promise<void>}
   */
  async navigateToLoginPage(){
    await this.navigate('/login');
  }

  /**
   * Perform login action with provided credentials
   * @param {string} username - The username to use
   * @param {string} password - The password to use
   * @returns {Promise<void>}
   */
  async login(username, password){
    // Fill the username field
    await this.page.fill(this.usernameInput, username);

    // Fill the password field 
    await this.page.fill(this.passwordInput, password);

    // Click the login button
    await this.page.click(this.loginButton);
  }

  /**
   * Get the text of the flash message
   * @returns {Promise<string>} - The text of the flash message
   */
  async getFlashMessage(){
    const flashElement = await this.waitForElement(this.flashMessage);
    return await flashElement.innerText();
  }

   /**
   * Check if user is logged in by looking for success message
   * @returns {Promise<boolean>} - True if logged in, false otherwise
   */
   async isLoggedIn() {
    const message = await this.getFlashMessage();
    return message.includes('You logged into a secure area!');
  }
}

module.exports = LoginPage;