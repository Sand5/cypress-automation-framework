/// <reference types="cypress" />

describe("Verify radio buttons via webdriver uni", () => {
  before(() => {
    cy.log("Runs once before all tests in the block");
    cy.visit("http://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find('[type="radio"]').first().check();
    cy.get("#radio-buttons").find('[type="radio"]').eq(1).check();
  });

  it.only("Validate the states of specific radio buttons", () => {
    cy.get("[value ='lettuce']").should("not.be.checked");
    cy.get("[value ='pumpkin']").should("be.checked");

    cy.get("[value ='lettuce']").check().should("be.checked");
    cy.get("[value ='pumpkin']").should("not.be.checked");
  });
});
