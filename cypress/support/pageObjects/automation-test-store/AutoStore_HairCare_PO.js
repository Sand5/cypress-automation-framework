class Auto_StoreHairCare_PO {
  addHairCareProductToBasket() {
    globalThis.productName.forEach((productName) => {
      cy.addProductToBasket(productName);
    });
    cy.get("ul[class='nav topcart pull-left']").click();
  }
}
export default Auto_StoreHairCare_PO;
