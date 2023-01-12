/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe('User sign up and login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseurl'))
  })
  context('[Smoke Test] Hitting the real api', () => {
    context('Positive scenarios', () => {
      it.only('should login successful', function () {
        cy.fillMandatoryLoginFields(Cypress.env('login_credentials').username, Cypress.env('login_credentials').userpwd)
        cy.get(Cypress.env('login_page_identifiers').login_button).click()
        cy.get(Cypress.env('home_page_identifiers').sidenav_username)
        cy.should('be.visible')
          .and('contain', '@Allie2')
      })

      it('should open sign up form', function () {
        cy.get("[data-test='signup']").click()
        cy.get('[data-test="signup-title"]')
        cy.should('be.visible')
        cy.and('contain', 'Sign Up')
      })
    })

    context('Negative scenarios', () => {
      it('should not be able to login with wrong credentials', function () {
        cy.fillMandatoryLoginFields('sfsdfdfdsfds', 'sdfsdfsfsdfds')
        cy.get("button[data-test='signin-submit']").click()
        cy.get('div[data-test="signin-error"]')
        cy.should('be.visible')
          .and('contain', 'Username or password is invalid')
      })
    })
  })
})
