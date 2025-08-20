import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";

/// <reference types="cypress" />

const autoStoreHomePage = new AutoStore_Homepage_PO();
const autoStoreHairCarePage = new AutoStore_HairCare_PO();

describe.skip("Add multiple items to basket", () => {
  before(() => {
    cy.log("Runs once before all tests in the block");
    cy.fixture("products").then((data) => {
      globalThis = data;
    });
  });

  beforeEach(() => {
    autoStoreHomePage.accessHomePage();
    autoStoreHomePage.clickOnHairCareLink();
  });
  it("Add specific items to basket", () => {
    autoStoreHairCarePage.addHairCareProductToBasket();
  });
});

