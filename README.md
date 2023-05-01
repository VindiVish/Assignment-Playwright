
#Assignment End-to-End Testing

This repository contains end-to-end tests for the Sakeranking application using Playwright.<br>
These tests cover critical user workflows and ensure that the application is functioning correctly.

## Getting Started
---

### Pre-requisites

Playwright is built on top of Node.js, so you need to have Node.js installed on your system.<br>
Please installl `nvm` that allows you to quickly install and use different versions of node via the command line.
For more information about `nvm`, see the nvm documentation:<br>
https://github.com/nvm-sh/nvm

### Installation

To get started, clone this repository and install the dependencies:

# Clone the repository
git clone ------

# Move to the cloned repository
cd sakeranking 


### Playwright VS Code Extension

Alternatively you can also get started and run your tests using the VS CODE Extension.

For more information on using the Playwright VS Code extension, see the Playwright documentation:<br>
https://playwright.dev/docs/getting-started-vscode


## Writing Tests
---

The tests in this repository are written in TypeScript using the Playwright testing library.

To create a new test, create a new file in the `tests` directory. <br>
The file should be named using the convention `section-name.spec.ts`.
## Ex: sakeranking.spec.ts

### Test Generator

Playwright offers a built-in test generation feature that makes it easy to get started with testing.<br>
This feature allows you to interact with a website in a browser window and record your tests using the Playwright Inspector window, which also provides options to copy, clear, and change the language of your tests.

For more information on using the test generator, see the Playwright documentation:<br>
https://playwright.dev/docs/codegen-intro

### Debugging Tests

When writing tests, you can use the following command to launch the browser in a non-headless mode and pause the test execution at the beginning of the test.<br>


npx playwright test file-name.spec.ts --headed --debug
## Ex: npx playwright test sakeranking.spec.ts --headed --debug 



For information on writing tests, see the Playwright documentation:<br>
https://playwright.dev/docs/writing-tests

## Running Tests

To run the tests, use the following command:

# Run all tests
npm run test

# Run a specific test file
npm run test file-name.spec.ts


This command will start a test runner that launches a browser and runs the tests.<br>
By default, the tests are run in headless mode, but you can also run them in headed mode by giving the option:


npx playwright test landing-page.spec.ts --headed


For more information on running the tests, see the Playwright documentation:<br>
https://playwright.dev/docs/running-tests

