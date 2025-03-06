# Dynamic Loading Elements Test Suite

## Test Case ID: TC101
### Title: Verify Hidden Element
### Description: Test that a hidden element becomes visible after loading
### Preconditions:
- The application is accessible at https://the-internet.herokuapp.com/dynamic_loading/1

### Test Steps:
1. Navigate to the dynamic loading page (Example 1)
2. Verify that the "Hello World!" text is not visible
3. Click the "Start" button
4. Wait for the loading indicator to disappear

### Expected Results:
1. Loading indicator is displayed after clicking Start
2. Loading indicator disappears after a few seconds
3. "Hello World!" text becomes visible

### Status: Not Executed
### Priority: Medium

-----

## Test Case ID: TC102
### Title: Verify Element Rendered After Loading
### Description: Test that an element is rendered after loading
### Preconditions:
- The application is accessible at https://the-internet.herokuapp.com/dynamic_loading/2

### Test Steps:
1. Navigate to the dynamic loading page (Example 2)
2. Verify that the "Hello World!" text is not present in the DOM
3. Click the "Start" button
4. Wait for the loading indicator to disappear

### Expected Results:
1. Loading indicator is displayed after clicking Start
2. Loading indicator disappears after a few seconds
3. "Hello World!" text is rendered and becomes visible

### Status: Not Executed
### Priority: Medium