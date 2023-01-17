/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */

Cypress.Commands.add('fillMandatoryLoginFields', (username, password) => {
  cy.get(Cypress.env('login_page_identifiers').username_field)
    .type(username, { log: false })
  cy.get(Cypress.env('login_page_identifiers').userpwd_field)
    .type(password, { log: false })
})
