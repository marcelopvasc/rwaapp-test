/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('User sign up and login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
  })
  context('Hitting the real api', () => {
    context('Positive scenarios', () => {
      it('should login successful', function () {
        cy.get('#username')
          .type(Cypress.env('username'))
        cy.get('#password')
          .type(Cypress.env('userpwd'))
        cy.get("button[data-test='signin-submit']").click()
        cy.get('h6[data-test="sidenav-username"]')
        cy.should('be.visible')
          .and('contain', '@Allie2')
      })

      it.only('should open sign up form', function () {
        cy.get("[data-test='signup']").click()
        cy.get('[data-test="signup-title"]')
        cy.should('be.visible')
        cy.and('contain', 'Sign Up')
      })
    })

    context('Negative scenarios', () => {
      it('should not be able to login with wrong credentials', function () {
        cy.get('#username')
          .type('aaaaaa')
        cy.get('#password')
          .type('bbbbbbb')
        cy.get("button[data-test='signin-submit']").click()
        cy.get('div[data-test="signin-error"]')
        cy.should('be.visible')
          .and('contain', 'Username or password is invalid')
      })
    })
  })
})
