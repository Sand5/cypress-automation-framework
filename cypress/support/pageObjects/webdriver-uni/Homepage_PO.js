class HomePage_PO {
  visitHomePage() {
    cy.visit(Cypress.env("webdriverUni_homepage"), { timeout: 60000 });
  }

  clickOnContactUsButton() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  }
}
export default HomePage_PO;
