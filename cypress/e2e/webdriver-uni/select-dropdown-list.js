/// <reference types="cypress" />

describe("Interact with dropdown list via webdriver uni", () => {
  it("Select specific values via select dropdown lists", () => {
    cy.visit("http://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng");
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery");
  });

  it.only("Select specific values via select dropdown lists", () => {
    cy.visit("http://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG");
    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
   
  });
});
