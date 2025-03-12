/**
 * DynamicLoadingPage class represents the dynamic loading pages
 * It contains methods specific to the dynamic loading examples
 */
const BasePage = require('./base-page');

class DynamicLoadingPage extends BasePage {
  /**
   * Create a new DynamicLoadingPage instance
   * @param {import('@playwright/test').Page} page - Playwright page instance
   */
  constructor(page) {
    super(page); // Call the parent constructor
    
    // Define selectors for dynamic loading page elements
    this.startButton = 'button';
    this.loadingIndicator = '#loading';
    this.hiddenElement = '#finish h4';
  }

  /**
   * Navigate to the specific dynamic loading example
   * @param {number} exampleNumber - The example number (1 or 2)
   * @returns {Promise<void>}
   */
  async navigateToDynamicLoading(exampleNumber) {
    await this.navigate(`/dynamic_loading/${exampleNumber}`);
  }

  /**
   * Click the start button to begin loading
   * @returns {Promise<void>}
   */
  async clickStart() {
    await this.page.click(this.startButton);
  }

  /**
   * Wait for the loading indicator to disappear
   * @param {number} timeout - Timeout in milliseconds (optional)
   * @returns {Promise<void>}
   */
  async waitForLoadingToComplete(timeout = 30000) {
    // Wait for the loading indicator to appear first
    await this.waitForElement(this.loadingIndicator);
    
    // Then wait for it to disappear
    await this.page.waitForSelector(this.loadingIndicator, { 
      state: 'hidden', 
      timeout 
    });
  }

  /**
   * Check if the target element is visible
   * @returns {Promise<boolean>} - True if element is visible, false otherwise
   */
  async isTargetElementVisible() {
    try {
      await this.waitForElement(this.hiddenElement);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get the text of the target element
   * @returns {Promise<string>} - The text of the target element
   */
  async getTargetElementText() {
    const element = await this.waitForElement(this.hiddenElement);
    return await element.innerText();
  }
}

module.exports = DynamicLoadingPage;