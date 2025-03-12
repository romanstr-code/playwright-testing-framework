/**
 * Checkboxes functionality tests based on manual test cases TC201, TC202
 * This test file automates the checkbox scenarios defined in checkboxes.md
 */
const { test, expect } = require('@playwright/test');
const CheckboxesPage = require('../src/pages/checkboxes-page');
const TestHelper = require('../src/helpers/test-helper');

// Define a test suite for checkbox functionality
test.describe('Checkboxes Tests', () => {
  // Define a hook that runs before each test
  test.beforeEach(async ({ page }) => {
    TestHelper.logInfo('Starting checkboxes test');
  });

  // TC201: Toggle Checkboxes
  test('TC201 - Should toggle checkboxes', async ({ page }) => {
    // Create a checkboxes page instance
    const checkboxesPage = new CheckboxesPage(page);
    
    // Navigate to the checkboxes page
    await checkboxesPage.navigateToCheckboxesPage();
    
    // Verify initial state of checkbox 1 (unchecked)
    expect(await checkboxesPage.isCheckboxChecked(0)).toBeFalsy();
    
    // Verify initial state of checkbox 2 (checked)
    expect(await checkboxesPage.isCheckboxChecked(1)).toBeTruthy();
    
    // Click checkbox 1
    await checkboxesPage.clickCheckbox(0);
    
    // Click checkbox 2
    await checkboxesPage.clickCheckbox(1);
    
    // Verify checkbox 1 is now checked
    expect(await checkboxesPage.isCheckboxChecked(0)).toBeTruthy();
    
    // Verify checkbox 2 is now unchecked
    expect(await checkboxesPage.isCheckboxChecked(1)).toBeFalsy();
    
    TestHelper.logInfo('Toggle checkboxes test completed successfully');
  });

  // TC202: Double Toggle Checkboxes
  test('TC202 - Should return to original state after double toggle', async ({ page }) => {
    // Create a checkboxes page instance
    const checkboxesPage = new CheckboxesPage(page);
    
    // Navigate to the checkboxes page
    await checkboxesPage.navigateToCheckboxesPage();
    
    // Get initial states
    const initialState1 = await checkboxesPage.isCheckboxChecked(0);
    const initialState2 = await checkboxesPage.isCheckboxChecked(1);
    
    // Double toggle checkbox 1
    await checkboxesPage.clickCheckbox(0);
    await checkboxesPage.clickCheckbox(0);
    
    // Double toggle checkbox 2
    await checkboxesPage.clickCheckbox(1);
    await checkboxesPage.clickCheckbox(1);
    
    // Verify checkbox 1 is back to initial state
    expect(await checkboxesPage.isCheckboxChecked(0)).toBe(initialState1);
    
    // Verify checkbox 2 is back to initial state
    expect(await checkboxesPage.isCheckboxChecked(1)).toBe(initialState2);
    
    TestHelper.logInfo('Double toggle checkboxes test completed successfully');
  });
});