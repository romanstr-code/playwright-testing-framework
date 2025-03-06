# Checkboxes Test Suite

## Test Case ID: TC201
### Title: Toggle Checkboxes
### Description: Test checkbox toggle functionality
### Preconditions:
- The application is accessible at https://the-internet.herokuapp.com/checkboxes

### Test Steps:
1. Navigate to the checkboxes page
2. Verify the initial state of checkbox 1 (unchecked)
3. Verify the initial state of checkbox 2 (checked)
4. Click checkbox 1
5. Click checkbox 2

### Expected Results:
1. Checkbox 1 becomes checked after clicking
2. Checkbox 2 becomes unchecked after clicking

### Status: Not Executed
### Priority: Low

-----

## Test Case ID: TC202
### Title: Double Toggle Checkboxes
### Description: Test double toggle returns to original state
### Preconditions:
- The application is accessible at https://the-internet.herokuapp.com/checkboxes

### Test Steps:
1. Navigate to the checkboxes page
2. Click checkbox 1
3. Click checkbox 1 again
4. Click checkbox 2
5. Click checkbox 2 again

### Expected Results:
1. Checkbox 1 becomes checked after first click
2. Checkbox 1 becomes unchecked after second click
3. Checkbox 2 becomes unchecked after first click
4. Checkbox 2 becomes checked after second click

### Status: Not Executed
### Priority: Low