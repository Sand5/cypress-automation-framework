/// <reference types="cypress" />

describe('Test File Upload via webdriveruni', () => {
    it.only('Upload a file....', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png', { force: true } );
        cy.get('#submit-button').click();
        
    });

    it('Upload No file...', () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true});
         cy.get('#submit-button').click();
    });
});