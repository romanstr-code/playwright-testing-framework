/** BasePage class serves as a foundation for all page objects
 *  It contains common methods and properties used across all pages
 */ 

class BasePage {
    /**
   * Create a new BasePage instance
   * @param {import('@playwright/test').Page} page - Playwright page instance
   */
  constructor(page) {
    this.page = page; // Store the page instance for use in methods
    this.baseURL = 'https://the-internet.herokuapp.com'; // Base URL for the application
  }

  /**
   * Navigate to a specific path in the application
   * @param {string} path - The path to navigate to
   * @returns {Promise<void>}
   */
  async navigate(path){
    // Navigate to the specified path using the base URL
    await this.page.goto(`${this.baseURL}${path}`);
  }

  /**
   * Get the page title
   * @returns {Promise<string>} - The page title
   */
  async getTitle(){
    return await this.page.title();
  }

   /**
   * Wait for a specific element to be visible
   * @param {string} selector - CSS selector for the element
   * @param {number} timeout - Timeout in milliseconds (optional)
   * @returns {Promise<import('@playwright/test').ElementHandle>} - The element
   */
  async waitForElement(selector, timeout= 5000) {
    return await this.page.waitForSelector(selector, {
        state: 'visible',
        timeout
    });
  }
}

module.exports = BasePage;