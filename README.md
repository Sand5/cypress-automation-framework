# cypress-automation-framework
Cypress Test Automation Framework (Demo Project) A demo Cypress framework showcasing the skills and best practices I’ve learned over the years. It features modular architecture, reusable components, custom commands, environment configs, and detailed test reporting using Mochawesome. and CI/CD setup for scalable, maintainable end-to-end testing.





---

## 📦 Project Structure


```plaintext
├── cypress/
│   ├── config/
│   │   └── staging.json
│   ├── e2e/
│   │   ├── webdriver-uni/
│   │   └── automation-test-store/
│   ├── results/
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── reporter-config.json
├── mochawesome-report/     ← Generated after running regression-pack
├── package.json


### Key Files:

- **`cypress/config/staging.json`** – Custom configuration for staging environment.
- **`cypress.config.js`** – Main Cypress config file (env vars, reporter setup, baseUrl, etc.).
- **`reporter-config.json`** – Configuration for generating Mochawesome HTML reports.
- **`mochawesome-report/`** – Folder automatically generated after running the regression pack.

---

## 🚀 Getting Started

### 1. Install Dependencies

This project uses the following dev dependencies:

- `cypress` (v13.17.0)
- `@cypress/xpath`
- `cypress-multi-reporters`
- `mocha-junit-reporter`
- `mochawesome`
- `mochawesome-merge`
- `mochawesome-report-generator`

Install all dependencies by running:

```bash
npm install

📜 Available Scripts/Test Execution

Test Execution
| Script Name                     | Description                                        |
| ------------------------------- | -------------------------------------------------- |
| `triggerAllTests-headless`      | Run all tests in headless mode.                    |
| `triggerAllTests-headed`        | Run all tests with a visible browser.              |
| `triggerAllTests-chrome`        | Run tests using Chrome browser.                    |
| `triggerAllTests-dashboard`     | Run and report results to Cypress Dashboard.       |
| `triggerAllTests-webdriveruni`  | Run tests in `webdriver-uni/` folder.              |
| `triggerAllTests-autoTestStore` | Run tests in `automation-test-store/` folder.      |
| `triggerAllTests-staging`       | Run tests using `staging.json` environment config. |


📊 Report Management
| Script Name                     | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| `mergeMochawesomeReports`       | Merge individual mochawesome JSON files into one HTML report.          |
| `deleteMochawesomeReports`      | Delete all raw mochawesome JSON files.                                 |
| `deleteMochawesomeMergedReport` | Delete the generated mochawesome HTML report folder.                   |
| `delete-results`                | Remove all previous test result files.                                 |
| `regression-pack`               | Clean results, run all tests, and generate a final mochawesome report. |


🧪 Test Folders

cypress/e2e/webdriver-uni – Tests for WebDriverUniversity.

cypress/e2e/automation-test-store – Tests for Automation Test Store.


📌 Notes

Tests are run using npx cypress run via custom npm scripts.
The framework supports multiple environments using config files inside cypress/config/.
Reporting is handled via Mochawesome with HTML output in mochawesome-report/.
To view the final test report, open mochawesome-report/mochawesome.html in a browser.


📄 License
This project is for educational and demonstration purposes only.

