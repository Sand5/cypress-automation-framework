/// <reference types="cypress" />
describe("Handling IFrame & Modals", () => {
  it("Handle webdriveruni iframe and modal", () => {
    cy.visit("http://webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframeBody");
    });

    cy.get("@iframeBody").find("#button-find-out-more").click();
    cy.get("@iframeBody").find("#myModal").as("modal");
    cy.get("@modal").should("be.visible");
    cy.get("@modal").should(($expected) => {
      const text = $expected.text();
      expect(text).to.include("Welcome to webdriveruniversity.com");
    });
    cy.get("@modal").contains("Close").click();
  });
});
