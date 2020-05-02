/// <reference types="Cypress" />

describe("Test our form inputs", function () {
    this.beforeEach(function() {
        cy.visit("http://localhost:3000/Pizza")
    })
    it("adds text to inputs", function () {
        cy.get('[data-cy="name"]')
            .type("Nate")
            .should("have.value", "Nate")
        cy.get('#size')
            .select("family")
            .should("have.value", "family")
        cy.get('textarea')
            .type("Send with love")
            .should("have.value", "Send with love")
        cy.contains('Add to Order')
            .click()
    })
})