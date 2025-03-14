# Playwright Testing Framework

This project demonstrates a testing framework using Playwright for web automation testing.

## Project Structure


| Directory/File | Description |
|----------------|-------------|
| `docs/` | Documentation |
| `docs/manual-test-cases/` | Manual test cases |
| `docs/test-mapping.md` | Mapping between manual and automated tests |
| `src/` | Source code |
| `src/pages/` | Page objects |
| `src/helpers/` | Helper functions |
| `src/fixtures/` | Test fixtures |
| `tests/` | Test files |
| `tests/api/` | API tests |
| `tests/ui/` | UI tests |
| `reports/` | Test reports |
| `.gitignore` | Git ignore file |
| `package.json` | NPM package file |
| `playwright.config.js` | Playwright configuration |
| `README.md` | Project documentation |

## Setup

1. Clone the repository: 
- i. `git clone <repository-url>`
- ii. `cd playwright-testing-framework`

2. Install dependencies:
- iii `npm install`

3. Install Playwright browsers:
- iv `npx playwright install`

## Running Tests

*Run all tests:*

- `npx playwright test`

*Run a specific test file:*

- `npx playwright test tests/ui/login.spec.js`

*Run tests with UI mode (for debugging):*

- `npx playwright test --ui`

## Generating Reports

*After running tests, view the HTML report:*

- `npx playwright show-report`

## Framework Features

1. **Page Object Model**: Each page is represented by a class, which encapsulates the page's behavior.
2. **Manual Test Cases**: Documented manual test cases serve as specifications for automated tests.
3. **Test Helpers**: Utility functions to assist with testing tasks.
4. **Test Structure**: Tests are organized by feature and follow a consistent pattern.
5. **Test Mapping**: Clear documentation of the relationship between manual and automated tests.

## Best Practices

1. **Maintainability**: Use page objects to encapsulate page behavior.
2. **Readability**: Use descriptive test names and follow a consistent structure.
3. **Reliability**: Handle timeouts and waits properly.
4. **Isolation**: Each test should be independent and not rely on the state from other tests.
5. **Assertions**: Use explicit assertions to verify expected behavior.

## Manual Test Cases

Manual test cases are located in the `docs/manual-test-cases` directory and follow a consistent format:

- Test case ID and title
- Description
- Preconditions
- Test steps
- Expected results
- Status and priority

These manual test cases serve as the foundation for automated tests and help ensure comprehensive test coverage.

## Automated Test Implementation

Automated tests are implemented using Playwright and follow these principles:

1. Each test corresponds to a manual test case
2. Tests use page objects to interact with the application
3. Tests include appropriate assertions to verify expected behavior
4. Tests include logging and reporting

## Manual to Automated Test Workflow

1. **Create Manual Test Cases**: Document test cases in the `docs/manual-test-cases` directory.
2. **Create Page Objects**: Implement page objects in the `src/pages` directory.
3. **Implement Automated Tests**: Create automated tests in the `tests` directory.
4. **Update Test Mapping**: Document the relationship in `docs/test-mapping.md`.


## Contributing

1. Create a feature branch from `main`.
2. Implement your changes.
3. Write tests for your changes.
4. Update documentation as needed.
5. Submit a pull request.

## Continuous Integration

This project includes GitHub Actions workflow configuration to run tests automatically on push and pull requests.

To view the workflow file, see `.github/workflows/playwright.yml`.

## Troubleshooting

Common issues and their solutions:

1. **Tests are flaky**: Increase timeouts or improve selectors.
2. **Browser doesn't launch**: Ensure Playwright browsers are installed with `npx playwright install`.
3. **Element not found**: Check if the selector is correct and the element is visible.

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Page Object Model](https://playwright.dev/docs/pom)
- [Test Assertions](https://playwright.dev/docs/test-assertions)
- [API Reference](https://playwright.dev/docs/api/class-playwright)


## Version Control with Git

This project uses Git for version control. Here are some common Git commands:

```bash
# Check status of your files
git status

# Add files to staging
git add .

# Commit changes with a descriptive message
git commit -m "Add login tests"

# Push changes to the remote repository
git push origin main

# Create a new branch for a feature
git checkout -b feature/add-api-tests

# Switch between branches
git checkout main
