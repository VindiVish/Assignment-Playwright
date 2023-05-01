#Assignment End-to-End Testing

This repository contains end-to-end tests for the Sakeranking application using Playwright.
These tests cover critical user workflows and ensure that the application is functioning correctly.

## Getting Started
----------

### Pre-requisites

Playwright is built on top of Node.js, so you need to have Node.js installed on your system.
Please installl `nvm` that allows you to quickly install and use different versions of node via the command line.
For more information about `nvm`, see the nvm documentation:<br>
https://github.com/nvm-sh/nvm

### Installation

To get started, clone this repository and install the dependencies:
```zsh
# Clone the repository
git clone https://github.com/VindiVish/Assignment-Playwright.git

# Move to the cloned repository
cd Assignment-Playwright 

#Install @playwright/test package to use Playwright Test.
npm install -D @playwright/test
```
### Playwright VS Code Extension

Alternatively you can also get started and run your tests using the VS CODE Extension.

For more information on using the Playwright VS Code extension, see the Playwright documentation:
https://playwright.dev/docs/getting-started-vscode

## Writing Tests
---

The tests in this repository are written in TypeScript using the Playwright testing library.

To create a new test, create a new file in the `tests` directory. 
The file should be named using the convention `section-name.spec.ts`.

### Test Generator

Playwright offers a built-in test generation feature that makes it easy to get started with testing.
This feature allows you to interact with a website in a browser window and record your tests using the Playwright Inspector window, which also provides options to copy, clear, and change the language of your tests.

For more information on using the test generator, see the Playwright documentation:
https://playwright.dev/docs/codegen-intro

### Debugging Tests

When writing tests, you can use the following command to launch the browser in a non-headless mode and pause the test execution at the beginning of the test.
```zsh
npx playwright test file-name.spec.ts --headed --debug
##Ex: npx playwright test sakeranking.spec.ts --headed --debug
```
For information on writing tests, see the Playwright documentation:
https://playwright.dev/docs/writing-tests

## Running Tests

To run the tests, use the following command:

# Run all tests
```zsh
npm run test
```
# Run a specific test file
```zsh
npm run test file-name.spec.ts
##Ex: npm run test sakeranking.spec.ts 
```
This command will start a test runner that launches a browser and runs the tests.
By default, the tests are run in headless mode, but you can also run them in headed mode by giving the option:

```zsh
npx playwright test landing-page.spec.ts --headed
##Ex: npx playwright test sakeranking.spec.ts
```
For more information on running the tests, see the Playwright documentation:
https://playwright.dev/docs/running-tests

#######################

# sakenowa

[さけのわ API](https://sakenowa.com/)から取得した
日本酒ランキング情報をもとに、React・Recoil を用いた日本酒ランキング閲覧サイト

## Dependency

- build
  - vite 2.7
- Front
  - React 17.0
  - Recoil 0.5
  - typescript 4.4
- Design
  - emotion 11.7
  - mui 5.3
- test
  - vitest 0.2

## Setup

- `git clone https://github.com/ogaru-sh/SakeRanking`
- `npm install`
- `npm run build`
- `npm run start`
- `http://localhost:3000/`へアクセス

### Develop mode

`npm run dev`

### Demo

- firebase
  - https://sakeranking.web.app
  - さけのわ API へアクセスする際に、現状はローカルから接続のみ可能
  - Demo を確認する際は `npm run dev` を実行したあと確認可能

### Function

- タブ
  - ランキング
    - さけのわ API から日本酒ランキングを取得し表示
  - お気に入り
    - ランキングページでスターボタンを押したものをお気に入りとして表示
