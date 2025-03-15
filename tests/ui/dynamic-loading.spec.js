/**
 * Dynamic loading functionality tests based on manual test cases TC101, TC102
 * This test file automates the dynamic loading scenarios defined in dynamic-loading.md
 */
const { test, expect } = require('@playwright/test');
const DynamicLoadingPage = require('../../src/pages/dynamic-loading-page');
const TestHelper = require('../../src/helpers/test-helper');

// Define a test suite for dynamic loading functionality
test.describe('Dynamic Loading Tests', () => {
  // Define a hook that runs before each test
  test.beforeEach(async ({ page }) => {
    TestHelper.logInfo('Starting dynamic loading test');
  });

  // TC101: Verify Hidden Element
  test('TC101 - Should display hidden element after loading (Example 1)', async ({ page }) => {
    // Create a dynamic loading page instance
    const dynamicLoadingPage = new DynamicLoadingPage(page);
    
    // Navigate to example 1
    await dynamicLoadingPage.navigateToDynamicLoading(1);
    
    // Verify element is not visible initially
    expect(await dynamicLoadingPage.isTargetElementVisible()).toBeFalsy();
    
    // Click the start button
    await dynamicLoadingPage.clickStart();
    
    // Wait for loading to complete
    await dynamicLoadingPage.waitForLoadingToComplete();
    
    // Verify element is now visible
    expect(await dynamicLoadingPage.isTargetElementVisible()).toBeTruthy();
    
    // Verify the text content
    const text = await dynamicLoadingPage.getTargetElementText();
    expect(text).toBe('Hello World!');
    
    TestHelper.logInfo('Dynamic loading example 1 test completed successfully');
  });

  // TC102: Verify Element Rendered After Loading
  test('TC102 - Should render element after loading (Example 2)', async ({ page }) => {
    // Create a dynamic loading page instance
    const dynamicLoadingPage = new DynamicLoadingPage(page);
    
    // Navigate to example 2
    await dynamicLoadingPage.navigateToDynamicLoading(2);
    
    // Element is not in DOM initially so we can't check visibility directly
    // We'll just proceed with the test
    
    // Click the start button
    await dynamicLoadingPage.clickStart();
    
    // Wait for loading to complete
    await dynamicLoadingPage.waitForLoadingToComplete();
    
    // Verify element is now visible
    expect(await dynamicLoadingPage.isTargetElementVisible()).toBeTruthy();
    
    // Verify the text content
    const text = await dynamicLoadingPage.getTargetElementText();
    expect(text).toBe('Hello World!');
    
    TestHelper.logInfo('Dynamic loading example 2 test completed successfully');
  });
});