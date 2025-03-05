# Login Functionality Test Suite

## Test Case ID: TC001
### Title: Valid Login
### Description: Test login functionality with valid credentials
### Preconditions:
- The application is accessible at https://the-internet.herokuapp.com/login
- Valid credentials exist in the system

### Test Steps:
1. Navigate to the login page
2. Enter valid username: "tomsmith"
3. Enter valid password: "SuperSecretPassword!"
4. Click the "Login" button

### Expected Results:
1. User is redirected to secure area
2. Success message "You logged into a secure area!" is displayed

### Status: Not Executed
### Priority: High

-----

## Test Case ID: TC002
### Title: Invalid Username Login
### Description: Test login functionality with invalid username
### Preconditions:
- The application is accessible at https://the-internet.herokuapp.com/login

### Test Steps:
1. Navigate to the login page
2. Enter invalid username: "invaliduser"
3. Enter valid password: "SuperSecretPassword!"
4. Click the "Login" button

### Expected Results:
1. User remains on login page
2. Error message "Your username is invalid!" is displayed

### Status: Not Executed
### Priority: High

-----

## Test Case ID: TC003
### Title: Invalid Password Login
### Description: Test login functionality with invalid password
### Preconditions:
- The application is accessible at https://the-internet.herokuapp.com/login

### Test Steps:
1. Navigate to the login page
2. Enter valid username: "tomsmith"
3. Enter invalid password: "wrongpassword"
4. Click the "Login" button

### Expected Results:
1. User remains on login page
2. Error message "Your password is invalid!" is displayed

### Status: Not Executed
### Priority: High