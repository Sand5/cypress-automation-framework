/// <reference types="cypress" />
describe("Test Contact Us Form via Automation Test Store", () => {
  before(() => {
    cy.fixture("userDetails").as("user");
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then((link) => {
        cy.log("Navigated to Contact Us page via link: " + link.text());
      });
    //cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get("@user").then((user) => {
      cy.get("#ContactUsFrm_first_name").type(user.first_name);
      cy.get("#ContactUsFrm_email").type(user.email);
    });

    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("Hello, this is a test message.");
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "contain",
      "Your enquiry has been successfully sent to the store owner!",
    );
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("blogs");
    cy.get("textarea.feedback-input").type("How can I learn Cypress?");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
  });
});
