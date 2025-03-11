/**
 * CheckboxesPage class represents the checkboxes page
 * It contains methods specific to checkbox functionality
 */
const BasePage = require('./base-page');

class CheckboxesPage extends BasePage {
  /**
   * Create a new CheckboxesPage instance
   * @param {import('@playwright/test').Page} page - Playwright page instance
   */
  constructor(page) {
    super(page); // Call the parent constructor
    
    // Define selectors for checkbox elements
    this.checkboxes = 'input[type="checkbox"]';
  }

  /**
   * Navigate to the checkboxes page
   * @returns {Promise<void>}
   */
  async navigateToCheckboxesPage() {
    await this.navigate('/checkboxes');
  }

  /**
   * Get the checkbox at the specified index
   * @param {number} index - The index of the checkbox (0-based)
   * @returns {Promise<import('@playwright/test').ElementHandle>} - The checkbox element
   */
  async getCheckbox(index) {
    const checkboxes = await this.page.$$(this.checkboxes);
    return checkboxes[index];
  }

  /**
   * Check if the checkbox at the specified index is checked
   * @param {number} index - The index of the checkbox (0-based)
   * @returns {Promise<boolean>} - True if checkbox is checked, false otherwise
   */
  async isCheckboxChecked(index) {
    const checkbox = await this.getCheckbox(index);
    return await checkbox.isChecked();
  }

  /**
   * Click the checkbox at the specified index
   * @param {number} index - The index of the checkbox (0-based)
   * @returns {Promise<void>}
   */
  async clickCheckbox(index) {
    const checkbox = await this.getCheckbox(index);
    await checkbox.click();
  }
}

module.exports = CheckboxesPage;