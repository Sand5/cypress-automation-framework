import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="cypress" />
const homePage = new HomePage_PO();
const contactUsPage = new Contact_Us_PO();

describe("Test Contact Us Form via WebdriverUni", () => {
  beforeEach(() => {
    cy.log("Runs once before all tests in the block");

    homePage.visitHomePage();
    homePage.clickOnContactUsButton();
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });

  it.only("Should be able to submit a successful submission via contact us form", () => {
    contactUsPage.contactFormSubmission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Hello, this is a test message.",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form", () => {
    contactUsPage.contactFormSubmission(
      data.first_name,
      data.last_name,
      "invalid-email",
      "Hello, this is a test message.",
      "body",
      "Error: Invalid email address"
    );
  });
});
