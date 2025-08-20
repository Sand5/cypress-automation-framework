/// <reference types="cypress" />
describe("Select date from the datepicker", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    cy.get("#datepicker").click();
  });

  it("Calculate and assert the total age of all users", () => {
    var date = new Date();
    date.setDate(date.getDate() + 364);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();

    const selectMonthAndYear = () => {
      // function body here
      cy.get(".datepicker-switch")
        //.find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          // Add your logic here
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    };

    const selectFutureDay = () => {
      cy.get('[class="day"]').contains(futureDay).click();
    };
    selectMonthAndYear();
    selectFutureDay();
  });
});
