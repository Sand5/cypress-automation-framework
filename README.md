# cypress-automation-framework

**Cypress Test Automation Framework (Demo Project)**  
A demo Cypress framework showcasing the skills and best practices I’ve learned over the years.  
It features modular architecture, reusable components, custom commands, environment configs, and detailed test reporting using Mochawesome — along with support for BDD-style testing using Cucumber feature files.  

CI/CD ready for scalable, maintainable end-to-end testing.

---

## 📁 Project Structure

```plaintext
├── cypress/
│   ├── config/
│   │   └── staging.json
│   ├── e2e/
│   │   ├── features/                  # Cucumber-style .feature files
│   │   ├── standard-test/            # Traditional Cypress tests (.cy.js)
│   ├── fixtures/                     # Test data
│   ├── results/                      # Test result files
│   └── support/
│       ├── e2e.js                    # Cypress support file
│       └── step_definitions/        # Cucumber step definitions
├── cypress.config.js                # Cypress configuration
├── reporter-config.json             # Mochawesome reporter config
├── mochawesome-report/              # Generated HTML report after running regression-pack
├── package.json                     # Project manifest and scripts
├── eslint.config.cjs                # ESLint config for code quality

🚀 Getting Started
1. Install Dependencies

Install all project dependencies:
npm install

This includes:

cypress

@badeball/cypress-cucumber-preprocessor
esbuild
mochawesome
cypress-multi-reporters
mocha-junit-reporter
mochawesome-merge
mochawesome-report-generator
@cypress/xpath
eslint
eslint-plugin-cypress

🧪 Test Folders

| Folder                              | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| `cypress/e2e/features/`             | Cucumber-style `.feature` files             |
| `cypress/support/step_definitions/` | Step definitions mapped to Gherkin steps    |
| `cypress/e2e/standard-test/`        | Regular Cypress tests written in JavaScript |


📜 Available Scripts & Test Execution
🔧 Test Execution Scripts (in package.json)

| Script Name                       | Description                                        |
| --------------------------------- | -------------------------------------------------- |
| `triggerAllTests-headless`        | Run all tests in headless mode                     |
| `triggerAllTests-headed`          | Run all tests with a visible browser               |
| `triggerAllTests-chrome`          | Run tests using Chrome browser                     |
| `triggerAllTests-dashboard`       | Run and report results to Cypress Dashboard        |
| `triggerAllTests-webdriveruni`    | Run tests in `webdriver-uni/` folder               |
| `triggerAllTests-autoTestStore`   | Run tests in `automation-test-store/` folder       |
| `triggerAllTests-staging`         | Run tests using `staging.json` environment config  |
| `triggerallfeatures`              | Run **all `.feature` files** (Cypress + Cucumber)  |
| `triggerallfeatures` + tag filter | Run `.feature` files by **tag** using `--env TAGS` |
| `lint`                            | Run ESLint on all files                            |
| `lint:fix`                        | Auto-fix ESLint issues                             |


Add these to your package.json under "scripts".

📊 Report Management
| Script Name                     | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| `mergeMochawesomeReports`       | Merge individual mochawesome JSON files into one HTML report          |
| `deleteMochawesomeReports`      | Delete all raw mochawesome JSON files                                 |
| `deleteMochawesomeMergedReport` | Delete the generated mochawesome HTML report folder                   |
| `delete-results`                | Remove all previous test result files                                 |
| `regression-pack`               | Clean results, run all tests, and generate a final mochawesome report |

View the report
After running the regression pack
open mochawesome-report/mochawesome.html   # macOS
start mochawesome-report/mochawesome.html  # Windows

🧪 Running Tests
Launch Cypress UI
npx cypress open

Run all tests headlessly
npx cypress run

Run only Cucumber feature tests
npx cypress run --spec "cypress/e2e/features/**/*.feature"

Configuration Notes
Cypress is configured via cypress.config.js

Key setup includes:
e2e: {
  baseUrl: "http://webdriveruniversity.com",
  specPattern: [
    "cypress/e2e/**/*.feature",               // Cucumber
    "cypress/e2e/**/*.{js,ts,cy.js,cy.ts}"    // Standard Cypress
  ],
  stepDefinitions: "cypress/support/step_definitions",
  supportFile: "cypress/support/e2e.js",
  setupNodeEvents(on, config) {
    // Includes @badeball preprocessor & esbuild setup
  }
}

Make sure you do not include legacy "cypress-cucumber-preprocessor" settings in package.json.
🧹 Code Quality & Linting
This project uses ESLint to ensure clean, consistent, and bug-free test code.

📄 ESLint Config
Config file: eslint.config.cjs
Includes Cypress plugin rules (eslint-plugin-cypress)

| Command                       | Description                            |
| ----------------------------- | -------------------------------------- |
| `npm run triggerlint`         | Run ESLint across the project          |
| `npm run triggerlint:fix`     | Automatically fix common ESLint issues |
| `npm run triggerformat:check` | Check code formatting with Prettier    |


✅ VS Code Setup for Cucumber Step Autocomplete

To enable step definition autocompletion and remove "unmatched step" warnings in VS Code when using Cucumber with Cypress, follow these steps:

1. Install the Recommended Extension

Make sure you have the following extension installed:
Cucumber (Gherkin) Full Support

2. Update .vscode/settings.json
Add (or update) the following settings in your project’s .vscode/settings.json file:

{
  "cucumberautocomplete.steps": [
    "cypress/support/step_definitions/*.js",
    "cypress/e2e/**/*.js",
    "cypress/e2e/**/*.ts"
  ],
  "cucumberautocomplete.syncfeatures": "cypress/e2e/**/*.feature",
  "cucumberautocomplete.strictGherkinCompletion": true,
  "cucumberautocomplete.smartSnippets": true,
  "cucumberautocomplete.customParameters": [],
  "cucumberautocomplete.formatConfOverride": {}
}

Adjust the file paths if your project structure differs.

3. Reload VS Code
After saving your settings, reload VS Code to apply changes:
Open Command Palette (Cmd/Ctrl+Shift+P)
Select Reload Window

✅ Notes

You can use And or But in .feature files for readability.
But in your step definitions, use only Given, When, or Then — not And.
For string parameters like {string}, always wrap text in quotes in the .feature file

▶️ Run Feature Files by Tag

You can pass a tag dynamically using:
npm run triggerallfeatures -- --env TAGS='@smoke'
This will run only scenarios or features with the @smoke tag.

▶️ Run Feature Files by Tag

You can pass a tag dynamically using:
npm run triggerallfeatures -- --env TAGS='@smoke'


📌 Additional Notes

Feature tests must follow Gherkin syntax and be backed by step definitions
Environment config files (like staging.json) live in cypress/config/
Final test reports are HTML files inside mochawesome-report/

📄 License
This project is for educational and demonstration purposes only.