/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('User sign up and login', function () {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
  })

  it('should login successful', function () {
    cy.get('#username')
      .type(Cypress.env('username'))
    cy.get('#password')
      .type(Cypress.env('userpwd'))
    cy.get("button[data-test='signin-submit']").click()
  })
})
