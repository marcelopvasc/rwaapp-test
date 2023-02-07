/* eslint-disable no-undef */
/// <reference types="Cypress" />


describe('User login and sign up ', () => {
  
  beforeEach(() => {
    cy.intercept({
      method: 'GET',
      pathname: '**/signin'

    }).as('getLoginPage')

    cy.visit(Cypress.env('login_url'))
    cy.wait('@getLoginPage')
  })

  context.only('Transactions Scenarios', () => {
    
              it("Show transaction list", function () {
                
                cy.fillMandatoryLoginFields("Allie2", "s3cret")
                cy.get(Cypress.env('login_page_identifiers').login_button).click()

                cy.intercept(
                  'GET',
                  '**/transactions/public',
                  { fixture: 'transactions'}
                ).as('getTransactions')

                cy.wait('@getTransactions')

                console.log(cy.get('[data-test="transaction-list"]').eq(1))
                
               
              })
   
  })
  
})

   