// eslint.config.cjs (CommonJS format)

const cypressPlugin = require("eslint-plugin-cypress");
const prettierPlugin = require("eslint-plugin-prettier");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      "cypress/videos",
      "cypress/screenshots",
      "cypress/downloads",
    ],
  },
  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        cy: "readonly",
        Cypress: "readonly",
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        context: "readonly",
        expect: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      cypress: cypressPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Cypress
      "cypress/no-unnecessary-waiting": "warn",
      "cypress/no-assigning-return-values": "error",
      //'cypress/no-force': 'warn',
      "cypress/no-pause": "error",
      "cypress/no-async-tests": "error",

      // JS
      "no-console": "off",
      "no-unused-vars": "warn",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "consistent-return": "warn",
      "no-empty-function": ["warn", { allow: ["arrowFunctions"] }],

      // Prevent .only
      "no-restricted-properties": [
        "error",
        {
          object: "describe",
          property: "only",
          message: "Do not commit describe.only",
        },
        { object: "it", property: "only", message: "Do not commit it.only" },
        {
          object: "context",
          property: "only",
          message: "Do not commit context.only",
        },
      ],

      // Prettier
      "prettier/prettier": "warn",
    },
  },
];
