/// <reference types="cypress" />
describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    //makeupLink.click();
    // skincareLink.click();
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("h1 .maintext").then((headerText) => {
      const headerTextValue = headerText.text();
      expect(headerTextValue).to.include("Makeup");
      cy.log("Header text is: " + headerTextValue);
    });
  });

  it("Validate properties of the Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    //Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((formField) => {
      const firstNameText = formField.find("#field_11").text();
      expect(firstNameText).to.include("First name");
      cy.log("First name field text is: " + firstNameText);
    });
    //Embedded commands (Closure)

    cy.get("#field_11").then((firstNameField) => {
      expect(firstNameField.text()).to.include("First name");
      cy.log("First name field text is: " + firstNameField.text());
    });
  });
});
