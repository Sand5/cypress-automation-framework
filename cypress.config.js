const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress/config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log(
      `The configuration file ${file}.json does not exist at path: ${pathToConfigFile}`,
    );
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: "9p7auu", // your project id here
  e2e: {
    async setupNodeEvents(on, config) {
      // Add the Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Use esbuild for preprocessing test files including feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      // Return the config object
      return config;
    },

    // Pattern to locate your feature files and standard Cypress test files
    specPattern: [
      "cypress/e2e/**/*.feature",               // Cucumber feature files
      "cypress/e2e/**/*.{js,ts,cy.js,cy.ts}",   // Standard Cypress test files
    ],

    // Step definitions folder path
    stepDefinitions: "cypress/support/step_definitions",

    // Support file path
    supportFile: "cypress/support/e2e.js",

    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    watchForFileChanges: true,
    baseUrl: "http://webdriveruniversity.com",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      runMode: 0,
      openMode: 0,
    },
    env: {
      first_name: "Sanderson",
      webdriverUni_homepage: "http://webdriveruniversity.com",
    },

    video: false,
  },
});
