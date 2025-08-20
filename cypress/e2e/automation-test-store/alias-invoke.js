/// <reference types="cypress" />
// ***********************************************************
describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.log("Runs once before all tests in the block");
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("firstHairCareProduct");
    cy.get("@firstHairCareProduct").its("length").should("be.gt", 5);
    cy.get("@firstHairCareProduct").should("include", "Seaweed Conditioner");
  });

  it("Validate the number of products thumbnails on the homepage", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").invoke("toArray").as("totalThumbnails");
    cy.get("@totalThumbnails").its("length").should("eq", 16);
    cy.get(".productcart").invoke("attr", "title").as("productTitle");
    cy.get("@productTitle").should("include", "Add to Cart");
  });

  it.only("Calculate total of sale products", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("totalThumbnails");
    // cy.get("@totalThumbnails").find('.oneprice').each(($el, index, $list) => {
    // cy.log($el.text());
    // });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrices");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    var itemsTotal = 0;
    cy.get("@itemPrices").then((linkText) => {
      var itemsPriceTotal = 0;
      var itemPrices = linkText.split("$");
      var i;
      for (i = 0; i < itemPrices.length; i++) {
        cy.log("Price: " + itemPrices[i]);
        itemsPriceTotal += Number(itemPrices[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non Sale Items Total: " + itemsPriceTotal);
    });

    cy.get("@saleItemPrice")
      .then((linkText) => {
        var saleItemPrices = 0;
        var saleItemPrice = linkText.split("$");
        for (var i = 0; i < saleItemPrice.length; i++) {
          cy.log("Sale Price: " + saleItemPrice[i]);
          saleItemPrices += Number(saleItemPrice[i]);
        }

        itemsTotal += saleItemPrices;
        cy.log("Sale Items Total: " + saleItemPrices);
      })
      .then(() => {
        cy.log("Total Items Price: " + itemsTotal);
        expect(itemsTotal).to.eq(673);
      });
  });
});
