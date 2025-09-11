/// <reference types="cypress" />
describe("Handling data via webdriver uni", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });

  it("Calculate and assert the total age of all users", () => {
    var userDetails = [];
    cy.get("#thumbnail-1 td:nth-child(3)")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        var totalAge = 0;
        userDetails.forEach((age) => {
          totalAge += Number(age);
        });
        expect(totalAge).to.equal(322);
      });
  });

  it("Calculate and assert the age of specific users", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const surname = $el.text();
      if (surname.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(($el) => {
            const age = $el.text();
            expect(age).to.equal("80");
          });
      }
    });
  });
});
