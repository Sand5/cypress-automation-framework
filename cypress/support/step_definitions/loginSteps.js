const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

let loginData = [];

Given("I access the WebdriverUniversity Login Portal page", () => {
  cy.visit("/Login-Portal/index.html");
});

When("I enter a username {string}", (username) => {
  cy.get("#text").type(username);
});

When("I enter a password {string}", (password) => {
  cy.get("#password").type(password);
});

When("I click on the login button", () => {
  cy.get("#login-button").click();
});

Then(
  "I should be presented with the following message {string}",
  (expectedMessage) => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(expectedMessage);
    });
  },
);
