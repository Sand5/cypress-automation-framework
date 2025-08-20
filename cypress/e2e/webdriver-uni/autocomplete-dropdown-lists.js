/// <reference types="cypress" />

describe("Interact with dropdown list via webdriver uni", () => {
  it("Select specific products via autocomplete list", () => {
    cy.visit("http://webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list *")
      .each(($el, index, $list) => {
        const productText = $el.text();
        const productToSelect = "Avocado";

        if (productText === productToSelect) {
          cy.wrap($el).click();

          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      // .then(() => {
      //   cy.get("#myInput").type("G");

      //   cy.get("#myInputautocomplete-list *").each(($el, index, $list) => {
      //     const productText = $el.text();
      //     const productToSelect = "Grapes";

      //     if (productText === productToSelect) {
      //       cy.wrap($el).click();
      //       cy.get("#submit-button").click();
      //       cy.url().should("include", productToSelect);
      //     }
      //   });
      // });
  });
});
