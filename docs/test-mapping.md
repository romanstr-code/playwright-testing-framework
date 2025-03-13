# Test Case Mapping

This document provides a mapping between manual test cases and their automated implementations.

## Login Functionality

| Manual Test Case ID | Manual Test Case Title | Automated Test File      | Automated Test Function                         |
|---------------------|------------------------|--------------------------|------------------------------------------------|
| TC001               | Valid Login            | tests/ui/login.spec.js   | TC001 - Should login successfully with valid credentials |
| TC002               | Invalid Username Login | tests/ui/login.spec.js   | TC002 - Should show error with invalid username |
| TC003               | Invalid Password Login | tests/ui/login.spec.js   | TC003 - Should show error with invalid password |

## Dynamic Loading

| Manual Test Case ID | Manual Test Case Title               | Automated Test File               | Automated Test Function                                       |
|---------------------|--------------------------------------|-----------------------------------|---------------------------------------------------------------|
| TC101               | Verify Hidden Element                | tests/ui/dynamic-loading.spec.js  | TC101 - Should display hidden element after loading (Example 1) |
| TC102               | Verify Element Rendered After Loading| tests/ui/dynamic-loading.spec.js  | TC102 - Should render element after loading (Example 2)       |

## Checkboxes

| Manual Test Case ID | Manual Test Case Title       | Automated Test File            | Automated Test Function                                     |
|---------------------|------------------------------|--------------------------------|-------------------------------------------------------------|
| TC201               | Toggle Checkboxes            | tests/ui/checkboxes.spec.js    | TC201 - Should toggle checkboxes                            |
| TC202               | Double Toggle Checkboxes     | tests/ui/checkboxes.spec.js    | TC202 - Should return to original state after double toggle |